import * as React from "react";
import {FieldInjector} from "../../definition/FieldInjector";
import {fieldConnect, FieldProps} from "../../redux/fieldConnect";
import {VALID, Validation} from "../../definition/validation/Validation";
import {FIELD_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {FormEvent} from "../../definition/event/Event";
import {Field, FIELD_STATE} from "../../definition/model/Field";
import {FieldView} from "../../definition/view/FieldView";

export interface FieldWrapperProps {
    field: Field;
    tabIndex: number;
    forceValidation: boolean;
    View: FieldView;
}
export interface FieldWrapperState {
    shouldValidate: boolean;
}

export class FieldWrapperComponent extends React.Component<FieldWrapperProps & FieldProps, FieldWrapperState> {

    static defaultProps = {
        tabIndex: 1,
        forceValidation: false
    };

    constructor(props: FieldWrapperProps & FieldProps) {
        super(props);
        let {field, fieldContext} = this.props;
        this.state = {shouldValidate:fieldContext[field.id] !== undefined};
        this.getState = this.getState.bind(this);
        this.onFieldEvent = this.onFieldEvent.bind(this);
        this.onViewEvent = this.onViewEvent.bind(this);
    }

    static getFieldState(validation: Validation, forceValidation: boolean, shouldValidate: boolean) {
        if (!shouldValidate && !forceValidation) {
            return FIELD_STATE.DEFAULT;
        }
        return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
    };

    getState() {
        let {field, fieldContext, forceValidation} = this.props;
        let validation = field.getValidation === undefined ? VALID : field.getValidation(fieldContext);
        let fieldState = FieldWrapperComponent.getFieldState(validation, forceValidation, this.state.shouldValidate);
        return {fieldState, validation};
    }

    onFieldEvent(e: FormEvent, details?: any) {
        if(e == FIELD_EVENT.SUMBIT_VALUE){
            this.setState({shouldValidate: true});
        }
        this.props.setFieldValue(this.props.field.id, details!);
        this.onViewEvent(e, details!);
    }

    onViewEvent(event: FormEvent, value: any) {
        EVENT_MULTICASTER.event(event, this.props.field, value);
    }

    render() {
        let {View, field, tabIndex, fieldContext} = this.props;
        let isVisible = field.hasOwnProperty('isVisible') ? field.isVisible!(fieldContext) : true;
        let contextValue: any = fieldContext[field.id];
        let {fieldState, validation} = this.getState();
        let Field = FieldInjector.inject(field.type);

        return (
            <View field={field}
                  isVisible={isVisible}
                  onEvent={this.onViewEvent}
                  errorMessage={validation.message}
                  fieldState={fieldState}>
                <Field field={field}
                       tabIndex={tabIndex}
                       onFieldEvent={this.onFieldEvent}
                       contextValue={contextValue ? contextValue : undefined}/>
            </View>
        );
    }
}

export const FieldWrapper = fieldConnect(FieldWrapperComponent);