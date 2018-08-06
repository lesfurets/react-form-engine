import React from "react";
import PropTypes from "prop-types";
import "../styles/app.less";
import FormEngine from "../../src/component/FormEngine";

import "../styles/json-editor.less";
import {BLOCK_EDITOR_EVENT, BlockEditorView} from "./view/BlockEditorView";
import {FormEditorView} from "./view/FormEditorView";
import {FieldEditorView} from "./view/FieldEditorView";
import {EMPTY_CALLBACK} from "../../src/definition/props-utils";

class FormEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onEvent = this.onEvent.bind(this);
    }

    onEvent(event, element, details) {
        console.log(event, element, details);
        switch (event){
            case BLOCK_EDITOR_EVENT.REMOVE:
                this.props.onChange(this.props.model.filter(block => block.id !== element.id));
                break;
        }
    }

    render() {
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