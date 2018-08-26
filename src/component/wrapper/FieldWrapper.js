import React from "react";
import PropTypes from 'prop-types';
import {FieldInjector} from "../../definition/FieldInjector";
import {fieldConnect} from "../../redux/fieldConnect";
import {VALID} from "../../definition/validation/Validation";
import {EMPTY_CALLBACK} from "../../definition/props-utils";
import {FIELD_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";

export const FIELD_STATE = {
    DEFAULT: "field-default",
    VALID: "field-valid",
    ERROR: "field-error"
};

export class FieldWrapperComponent extends React.Component {

    constructor(props) {
        super(props);
        this.getState = this.getState.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onEvent = this.onEvent.bind(this);
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

    onValueChange(value) {
        this.props.setFieldValue(this.props.field.id, value);
        this.onEvent(FIELD_EVENT.SET_VALUE, value);
    }

    onEvent(event, details) {
        EVENT_MULTICASTER.event(event, this.props.field, details);
    }

    render() {
        let {View, field, tabIndex, fieldContext} = this.props;
        let isVisible = field.hasOwnProperty('visibility') ? field.visibility.evaluate(fieldContext): true;
        let contextValue = fieldContext[field.id];
        let {fieldState, validation} = this.getState();
        let Field = FieldInjector.inject(field.type);

        return (
            <div className={`FieldWrapper ${fieldState} ${field.id} ${field.type}`}>
                <View field={field}
                      isVisible={isVisible}
                      onEvent={this.onEvent}
                      errorMessage={validation.message}
                      fieldState={fieldState}>
                    <Field field={field}
                           tabIndex={tabIndex}
                           onValueChange={this.onValueChange}
                           contextValue={contextValue}/>
                </View>
            </div>
        );
    }
}

FieldWrapperComponent.propTypes = {
    field: PropTypes.shape({
        getValidation: PropTypes.func,
        visibility: PropTypes.object
    }).isRequired,
    View: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func,
    forceValidation: PropTypes.bool,
    tabIndex: PropTypes.number
};

FieldWrapperComponent.defaultProps = {
    forceValidation: false,
    tabIndex: 1
};

export const FieldWrapper = fieldConnect(FieldWrapperComponent);