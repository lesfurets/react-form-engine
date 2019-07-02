import * as React from "react";
import {createStore, Store} from "redux";
import {Provider} from 'react-redux'

import {BLOCK_EDITOR_EVENT, BlockEditorView} from "../view/BlockEditorView";
import {FORM_EDITOR_EVENT, FormEditorView} from "../view/FormEditorView";
import {FIELD_EDITOR_EVENT, FieldEditorView} from "../view/FieldEditorView";
import reducer from "../../../src/redux/reducers";
import FormWrapper from "../../../src/component/wrapper/FormWrapper";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {Form} from "../../../src/definition/model/Form";
import {FormEvent} from "../../../src/definition/event/Event";
import {FormElement} from "../../../src/definition/model/FormElement";
import {Field} from "../../../src/definition/model/Field";
import {Block} from "../../../src/definition/model/Block";
import {remove} from "lodash";
import {ModelUpdater} from "./ModelUpdater";
import {generateNewBlock, generateNewField} from "../definition/ModelUtils";

import "../../styles/json-editor.less";

interface FormEditorProps {
    form: Form,
    onChange: (form: Form) => void,
}

interface FormEditorState {
    store: Store<{}>,
}

export interface FieldMovement {
    id: string
    blockSrc: string
    blockDst: string
    indexDst: number
}

export interface BlockMovement {
    id: string
    indexDst: number
}

export class FormEditor extends React.Component<FormEditorProps, FormEditorState> {
    constructor(props: FormEditorProps) {
        super(props);
        this.state = {store: createStore(reducer)};
        this.onEvent = this.onEvent.bind(this);
        FormEditor.MODEL = props.form;
    }

    static MODEL?:Form = undefined;

    componentWillMount() {
        EVENT_MULTICASTER.subscribe(this.onEvent);
    }

    componentWillUnmount() {
        EVENT_MULTICASTER.unsubscribe(this.onEvent);
    }

    onEvent(event: FormEvent, element: FormElement, details: any) {
        let {form} = this.props;
        console.log(event, element, details);
        switch (event) {
            case FORM_EDITOR_EVENT.NEW_BLOCK:
                form.blocks.push(generateNewBlock());
                break;
            case FORM_EDITOR_EVENT.MOVE_BLOCK:
                const blockMovement = details as BlockMovement;
                let blocks = remove(form.blocks, block => block.id === details.id);
                form.blocks.splice(details.index, 0, blocks[0]);
                break;
            case BLOCK_EDITOR_EVENT.DELETE:
                remove(form.blocks, (block : Block) => block.id === element.id);
                break;
            case BLOCK_EDITOR_EVENT.EDIT_LABEL:
                form.blocks.filter((block : Block) => block.id === element.id)
                    .forEach((block : Block) => block.label = details);
                break;
            case BLOCK_EDITOR_EVENT.MOVE_FIELD:
                const fieldMovement = details as FieldMovement;
                let blockSrc = form.blocks.find(block => block.id === fieldMovement.blockSrc);
                let fields = remove(blockSrc!.fields, field => field.id === details.id);
                form.blocks.find(block => block.id === fieldMovement.blockDst)!.fields.splice(fieldMovement.indexDst, 0, fields[0]);
                break;
            case BLOCK_EDITOR_EVENT.NEW_FIELD:
                form.blocks.find((block: Block) => block.id === element.id)!.fields.push(generateNewField());
                break;
            case FIELD_EDITOR_EVENT.UPDATE_PROPERTIES:
                ModelUpdater.updateFieldProperty(form, element as Field, details);
                break;
            case FIELD_EDITOR_EVENT.DELETE:
                form.blocks.forEach((block : Block) => remove(block.fields, field => field.id === element.id));
                break;
            default: // We don't want to update model for other events.
                return;
        }
        this.props.onChange(form);
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