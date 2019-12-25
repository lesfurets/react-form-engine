import * as React from "react";
import {VALID, Validation} from "../definition/validation/Validation";
import {FIELD_EVENT} from "../definition/event/events";
import {EVENT_MULTICASTER} from "../definition/event/EventMulticaster";
import {FormEvent} from "../definition/event/Event";
import {Field, FIELD_STATE} from "../definition/model/Field";
import {FieldView} from "../definition/theme/view/FieldView";
import {FieldContext} from "../definition/FieldContext";
import {useFieldContext} from "../definition/store/useFieldContext";
import {useTheme} from "../definition/theme/useTheme";

export interface FieldWrapperProps {
    field: Field;
    index: number;
    tabIndex: number;
    forceValidation: boolean;
}

const getFieldState = (validation: Validation, forceValidation: boolean, shouldValidate: boolean) => {
    if (!shouldValidate && !forceValidation) {
        return FIELD_STATE.DEFAULT;
    }
    return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
};

const getState = (field: Field, fieldContext: FieldContext, forceValidation: boolean, shouldValidate: boolean) => {
    let validation = field.getValidation === undefined ? VALID : field.getValidation(fieldContext);
    let fieldState = getFieldState(validation, forceValidation, shouldValidate);
    return {fieldState, validation};
};

export const FieldWrapper: React.FunctionComponent<FieldWrapperProps> = ({field, index, tabIndex, forceValidation}) => {
    const [fieldContext, setFieldValue] = useFieldContext();
    const {FieldView, fieldInjector} = useTheme();
    const [shouldValidate, setShouldValidate] = React.useState(fieldContext[field.id] !== undefined);

    const isVisible = field.hasOwnProperty('isVisible') ? field.isVisible!(fieldContext) : true;
    const contextValue: any = fieldContext[field.id];
    const {fieldState, validation} = getState(field, fieldContext, forceValidation, shouldValidate);

    const onViewEvent = (event: FormEvent, value: any) => EVENT_MULTICASTER.event(event, field, value);

    const onFieldEvent = (event: FormEvent, details?: any) => {
        switch (event) {
            case FIELD_EVENT.RESET_VALUE:
                setFieldValue(field.id, undefined);
                break;
            case FIELD_EVENT.UPDATE_VALUE:
                console.log(event, details);
                setFieldValue(field.id, details!);
                break;
            case FIELD_EVENT.SUMBIT_VALUE:
                setShouldValidate(true);
                setFieldValue(field.id, details!);
                break;
        }
        onViewEvent(event, details!);
    };

    let Field = fieldInjector!(field.type);

    return (
        <FieldView field={field}
                   index={index}
                   isVisible={isVisible}
                   onEvent={onViewEvent}
                   errorMessage={validation.message}
                   fieldState={fieldState}>
            <Field field={field}
                   tabIndex={tabIndex}
                   onFieldEvent={onFieldEvent}
                   contextValue={contextValue ? contextValue : undefined}/>
        </FieldView>
    );
};

FieldWrapper.defaultProps = {
    tabIndex: 1,
    forceValidation: false
};