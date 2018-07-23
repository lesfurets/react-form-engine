import React from "react";
import PropTypes from 'prop-types';
import {FieldInjector} from "../../definition/FieldInjector";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/validation";

export const FIELD_STATE = {
    DEFAULT: "field-default",
    VALID: "field-valid",
    ERROR: "field-error"
};

export class FieldWrapperComponent extends React.Component {

    constructor() {
        super();
        this.getState = this.getState.bind(this);
    }

    static getFieldState(validation, contextValue, forceValidation) {
        if(!forceValidation && contextValue === undefined) {
            return FIELD_STATE.DEFAULT;
        }
        return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
    };

    getState() {
        let {field, fieldContext, forceValidation} = this.props;
        let contextValue = fieldContext[field.id];
        let validation = field.getValidation === undefined ? VALID : field.getValidation(fieldContext);
        let fieldState = FieldWrapper.getFieldState(validation, contextValue, forceValidation);
        return {fieldState, validation};
    }

    render() {
        let {View, field, tabIndex, setFieldValue, fieldContext} = this.props;
        let contextValue = fieldContext[field.id];
        let {fieldState, validation} = this.getState();
        let Field = FieldInjector.inject(field.type);

        return (
            <div className={`FieldWrapper ${fieldState} ${field.id} ${field.type}`}>
                <View field={field} validation={validation} fieldState={fieldState}>
                    <Field field={field}
                           tabIndex={tabIndex}
                           setFieldValue={setFieldValue}
                           contextValue={contextValue}/>
                </View>
            </div>
        );
    }
}

FieldWrapperComponent.propTypes = {
    field: PropTypes.shape({
        getValidation: PropTypes.func,
        isVisible: PropTypes.func
    }).isRequired,
    View: PropTypes.func.isRequired,
    forceValidation: PropTypes.bool,
    tabIndex: PropTypes.number
};

FieldWrapperComponent.defaultProps = {
    forceValidation: false,
    tabIndex: 1
};

export const FieldWrapper = fieldConnect(FieldWrapperComponent);