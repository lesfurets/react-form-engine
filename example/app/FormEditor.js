import React from "react";
import PropTypes from "prop-types";
import "../styles/app.less";
import FormEngine from "../../src/component/FormEngine";

import "../styles/json-editor.less";
import {BlockEditorView} from "./view/BlockEditorView";
import {FormEditorView} from "./view/FormEditorView";
import {FieldEditorView} from "./view/FieldEditorView";

class FormEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: props.model
        };
        this.onChange = this.onChange.bind(this);
        this.sendModel = this.sendModel.bind(this);
    }

    onChange(event) {
        this.setState({model: event.target.value});
    }

    sendModel() {
        this.props.onChange(this.state.model);
    }

    render() {
        return (
            <FormEngine blocks={this.state.model}
                        FormView={FormEditorView}
                        BlockView={BlockEditorView}
                        FieldView={FieldEditorView}/>
        );
    }
}

FormEditor.propTypes = {
    model: PropTypes.array.isRequired
};

export default FormEditor;