import React from "react";
import PropTypes from "prop-types";
import remove from "lodash/remove";
import FormEngine from "../../../src/component/FormEngine";

import {BLOCK_EDITOR_EVENT, BlockEditorView} from "../view/BlockEditorView";
import {FORM_EDITOR_EVENT, FormEditorView} from "../view/FormEditorView";
import {FIELD_EDITOR_EVENT, FieldEditorView} from "../view/FieldEditorView";
import {EMPTY_CALLBACK} from "../../../src/definition/props-utils";

import "../../styles/json-editor.less";
import {FieldTypes} from "../../../src/definition/FieldTypes";

const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateHash() {
    return Array
        .apply(null, {length: 10})
        .map(Function.call, Math.random)
        .map(rand => values.charAt(Math.floor(rand * values.length)))
        .reduce((acc, value) => acc + value, "");
}

const generateNewBlock = () => ({
    id: generateHash(),
    label: "Enter block name",
    fields: []
});

const generateNewField = () => ({
    id: generateHash(),
    label: "Enter field name",
    type: FieldTypes.INPUT_TEXT
});

class FormEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
    }

    onEvent(event, element, details) {
        console.log(event, element, details);
        let {model} = this.props;
        switch (event) {
            case FORM_EDITOR_EVENT.NEW_BLOCK:
                model.push(generateNewBlock());
                this.props.onChange(model);
                break;
            case FORM_EDITOR_EVENT.MOVE_BLOCK:
                let blocks = remove(model, block => block.id === details.id);
                model.splice(details.index, 0, blocks[0]);
                this.props.onChange(model);
                break;
            case BLOCK_EDITOR_EVENT.DELETE:
                remove(model, block => block.id !== element.id);
                break;
            case BLOCK_EDITOR_EVENT.EDIT_LABEL:
                model.filter(block => block.id === element.id)
                    .forEach(block => block.label = details);
                this.props.onChange(model);
                break;
            case BLOCK_EDITOR_EVENT.MOVE_FIELD:
                let blockSrc = model.find(block => block.id === details.blockSrc);
                let fields = remove(blockSrc.fields, field => field.id === details.id);
                model.find(block => block.id === details.blockDst).fields.splice(details.index, 0, fields[0]);
                this.props.onChange(model);
                break;
            case BLOCK_EDITOR_EVENT.NEW_FIELD:
                model.find(block => block.id === element.id).fields.push(generateNewField());
                this.props.onChange(model);
                break;
            case FIELD_EDITOR_EVENT.EDIT_LABEL:
                model.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.label = details);
                this.props.onChange(model);
                break;
            case FIELD_EDITOR_EVENT.EDIT_TYPE:
                model.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.type = details);
                console.log(model);
                this.props.onChange(model);
                break;
            case FIELD_EDITOR_EVENT.DELETE:
                model.forEach(block => remove(block.fields, field => field.id === element.id));
                this.props.onChange(model);
                break;
        }
    }

    render() {
        return (
            <FormEngine form={this.props.model}
                        onEvent={this.onEvent}
                        FormView={FormEditorView}
                        BlockView={BlockEditorView}
                        FieldView={FieldEditorView}/>
        );
    }
}

FormEditor.propTypes = {
    model: PropTypes.array.isRequired,
    onEvent: PropTypes.func
};

FormEditor.defaultProps = {
    onEvent: EMPTY_CALLBACK
};

export default FormEditor;