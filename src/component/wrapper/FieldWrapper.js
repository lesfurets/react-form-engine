import React from "react";
import PropTypes from 'prop-types';
import {
    INPUT_TEXT,
    INPUT_MAIL
} from "../../definition/field-type";
import {fieldConnect} from "../../redux/fieldConnect";
import TextField from "../fields/TextField";
import FieldContainer from "../container/FieldContainer";
import {VALID} from "../../definition/validation";

export const FIELD_STATE = {
    DEFAULT: "FIELD-DEFAULT",
    VALID: "FIELD-VALID",
    ERROR: "FIELD-ERROR"
};

let getFieldState = (validation, props) => {
    if(!props.forceValidation && (props.fieldContext[props.field.id] == undefined)) {
        return FIELD_STATE.DEFAULT;
    }
    return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
}

let injectField = (props) => {
    let fieldProps = {
        field: props.field,
        tabIndex: props.tabIndex,
        setFieldValue: props.setFieldValue,
        contextValue: props.fieldContext[props.field.id]
    }
    switch (props.field.type) {
        case INPUT_TEXT:
        case INPUT_MAIL:
            return <TextField {...fieldProps}/>;
        default:
            return <div className="unknown-field"/>;
    }
};

class FieldWrapper extends React.Component {
    render() {
        let Container = this.props.container;
        let validation = this.props.field.doValidation == undefined ? VALID : this.props.field.doValidation(this.props.fieldContext);
        let fieldState = getFieldState(validation, this.props);
        return (
            <div className={`field-wrapper ${fieldState.toLowerCase()}`}>
                <Container field={this.props.field} validation={validation} fieldState={fieldState}>
                    {injectField(this.props)}
                </Container>
            </div>
        );
    }
}

FieldWrapper.propTypes = {
    field: PropTypes.object.isRequired,
    container: PropTypes.func,
    forceValidation: PropTypes.bool,
    tabIndex: PropTypes.number
};

FieldWrapper.defaultProps = {
    container: FieldContainer,
    forceValidation: false,
    tabIndex: 1
};

export default fieldConnect(FieldWrapper);