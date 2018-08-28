import React from "react";
import PropTypes from "prop-types";
import remove from "lodash/remove";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import ResponsiveContainer from "react-responsive-widget";

import {BLOCK_EDITOR_EVENT, BlockEditorView} from "../view/BlockEditorView";
import {FORM_EDITOR_EVENT, FormEditorView} from "../view/FormEditorView";
import {FIELD_EDITOR_EVENT, FieldEditorView} from "../view/FieldEditorView";
import {EMPTY_CALLBACK} from "../../../src/definition/props-utils";

import {FieldTypes} from "../../../src/definition/FieldTypes";
import {VisibilityBuilder} from "../../../src/definition/visibility/VisibilityUtils";
import {Predicates} from "../../../src/definition/predicate/Predicates";
import {ValidationBuilder} from "../../../src/definition/validation/ValidationUtils";
import reducer from "../../../src/redux/reducers";
import FormWrapper from "../../../src/component/wrapper/FormWrapper";

import "../../styles/json-editor.less";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {fieldConnect} from "../../../src/redux/fieldConnect";
import {setFieldValueAction} from "../../../src/redux/actions";
import {ModelUtils} from "../../../src/definition/ModelUtils";

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

const generateVisibilityRules = (model) =>
    VisibilityBuilder.isNotVisible().when(Predicates.field(ModelUtils.getFieldList(model)[0].id).is().defined());

const generateValidationRules = (model) =>
    ValidationBuilder.error("Error message").when(Predicates.self().is().defined());

export class FormEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {store: createStore(reducer)};
        this.onEvent = this.onEvent.bind(this);
        this.state.store.dispatch(setFieldValueAction(FormEditor.MODEL, props.form));
    }

    static MODEL = "MODEL";

    componentWillMount() {
        EVENT_MULTICASTER.subscribe(this.onEvent);
    }

    componentWillUnmount() {
        EVENT_MULTICASTER.unsubscribe(this.onEvent);
    }

    onEvent(event, element, details) {
        let {form} = this.props;
        console.log(event, element, details);
        switch (event) {
            case FORM_EDITOR_EVENT.NEW_BLOCK:
                form.push(generateNewBlock());
                this.props.onChange(form);
                break;
            case FORM_EDITOR_EVENT.MOVE_BLOCK:
                let blocks = remove(form, block => block.id === details.id);
                form.splice(details.index, 0, blocks[0]);
                this.props.onChange(form);
                break;
            case BLOCK_EDITOR_EVENT.DELETE:
                remove(form, block => block.id === element.id);
                this.props.onChange(form);
                break;
            case BLOCK_EDITOR_EVENT.EDIT_LABEL:
                form.filter(block => block.id === element.id)
                    .forEach(block => block.label = details);
                this.props.onChange(form);
                break;
            case BLOCK_EDITOR_EVENT.MOVE_FIELD:
                let blockSrc = form.find(block => block.id === details.blockSrc);
                let fields = remove(blockSrc.fields, field => field.id === details.id);
                form.find(block => block.id === details.blockDst).fields.splice(details.index, 0, fields[0]);
                this.props.onChange(form);
                break;
            case BLOCK_EDITOR_EVENT.NEW_FIELD:
                form.find(block => block.id === element.id).fields.push(generateNewField(form));
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.EDIT_LABEL:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.label = details);
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.EDIT_TYPE:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.type = details);
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.EDIT_PROPERTY:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field[details.key] = details.value);
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.ADD_VISIBILITY:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.visibilityRule = generateVisibilityRules(form));
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.CHANGE_VISIBILITY:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.visibilityRule = details);
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.DELETE_VISIBILITY:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => {
                        delete field.visibilityRule;
                        delete field.isVisible;
                    });
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.ADD_VALIDATION:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.validationRule = generateValidationRules(form));
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.CHANGE_VALIDATION:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => field.validationRule = details);
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.DELETE_VALIDATION:
                form.reduce((flat, block) => flat.concat(block.fields), [])
                    .filter(field => field.id === element.id)
                    .forEach(field => {
                        delete field.validationRule;
                        delete field.getValidation;
                    });
                this.props.onChange(form);
                break;
            case FIELD_EDITOR_EVENT.DELETE:
                form.forEach(block => remove(block.fields, field => field.id === element.id));
                this.props.onChange(form);
                break;
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <FormWrapper {...this.props}
                             View={FormEditorView}
                             BlockView={BlockEditorView}
                             FieldView={FieldEditorView}/>
            </Provider>
        );
    }

}

FormEditor.propTypes = {
    form: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    onEvent: PropTypes.func
};

FormEditor.defaultProps = {
    onEvent: EMPTY_CALLBACK
};