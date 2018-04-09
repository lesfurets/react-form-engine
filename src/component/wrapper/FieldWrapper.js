import React from "react";
import PropTypes from 'prop-types';
import {injectField} from "../../definition/field-injector";
import {fieldConnect} from "../../redux/fieldConnect";
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

class FieldWrapper extends React.Component {
    render() {
        let Container = this.props.container;
        let validation = this.props.field.getValidation == undefined ? VALID : this.props.field.getValidation(this.props.fieldContext);
        let fieldState = getFieldState(validation, this.props);

        let fieldProps = {
            field: this.props.field,
            tabIndex: this.props.tabIndex,
            setFieldValue: this.props.setFieldValue,
            contextValue: this.props.fieldContext[this.props.field.id]
        }

        let Field = injectField(this.props.field.type);

        return (
            <div className={`field-wrapper ${fieldState.toLowerCase()}`}>
                <Container field={this.props.field} validation={validation} fieldState={fieldState}>
                    <Field {...fieldProps}/>
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