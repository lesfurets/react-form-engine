import React from "react";
import PropTypes from "prop-types";
import FormEngine from "../../../src/component/FormEngine";

import {BLOCK_EDITOR_EVENT, BlockEditorView} from "../view/BlockEditorView";
import {FORM_EDITOR_EVENT, FormEditorView} from "../view/FormEditorView";
import {FieldEditorView} from "../view/FieldEditorView";
import {EMPTY_CALLBACK} from "../../../src/definition/props-utils";

import "../../styles/json-editor.less";

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
    label: "Enter the block name",
    fields: []
});

class FormEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
    }

    onEvent(event, element, details) {
        console.log(event, element, details);
        let {model} = this.props;
        switch (event){
            case BLOCK_EDITOR_EVENT.REMOVE:
                this.props.onChange(model.filter(block => block.id !== element.id));
                break;
            case BLOCK_EDITOR_EVENT.EDIT_LABEL:
                model
                    .filter(block => block.id === element.id)
                    .forEach(block => block.label = details);
                this.props.onChange(model);
                break;
            case FORM_EDITOR_EVENT.NEW_BLOCK:
                model.push(generateNewBlock());
                this.props.onChange(model);
                break;
            case FORM_EDITOR_EVENT.MOVE_BLOCK:
                let block = model.find(block => block.id === details.id);
                let newModel = model.filter(block => block.id !== details.id);
                newModel.splice(details.index, 0, block);
                this.props.onChange(newModel);
                break;
        }
    }

    render() {
        console.log(this.props.model);
        return (
            <FormEngine blocks={this.props.model}
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