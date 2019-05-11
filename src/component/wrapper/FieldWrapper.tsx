import * as React from "react";
import {FieldInjector} from "../../definition/FieldInjector";
import {FieldContextProps, FieldDispatchProps, FieldProps} from "../../redux/fieldConnect";
import {VALID, Validation} from "../../definition/validation/Validation";
import {FIELD_EVENT} from "../../definition/event/events";
import {EVENT_MULTICASTER} from "../../definition/event/EventMulticaster";
import {Field, FIELD_STATE, FieldContext} from "../../definition/FormModel";
import {FieldView} from "../view/FieldView";
import {FormEvent} from "../../definition/event/Event";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FieldValueAction} from "../../redux/constants";
import {setFieldValueAction} from "../../redux/actions";
import {FieldState} from "../../redux/reducers";

export interface FieldWrapperProps {
    field: Field;
    tabIndex: number;
    forceValidation: boolean;
    View: typeof FieldView;
}
export interface FieldWrapperState {
    forceValidation: boolean;
}

export class FieldWrapperComponent extends React.Component<FieldWrapperProps & FieldProps, FieldWrapperState> {

    static defaultProps = {
        tabIndex: 1,
        forceValidation: false
    };

    constructor(props: FieldWrapperProps & FieldProps) {
        super(props);
        this.state = {forceValidation:false};
        this.getState = this.getState.bind(this);
        this.onFieldEvent = this.onFieldEvent.bind(this);
        this.onViewEvent = this.onViewEvent.bind(this);
    }

    static getFieldState(validation: Validation, contextValue: string | null, forceValidation: boolean) {
        if (!forceValidation && contextValue === undefined) {
            return FIELD_STATE.DEFAULT;
        }
        return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
    };

    getState() {
        let {field, fieldContext, forceValidation} = this.props;
        let contextValue = fieldContext[field.id];
        let validation = field.getValidation === undefined ? VALID : field.getValidation(fieldContext);
        let fieldState = FieldWrapperComponent.getFieldState(validation, contextValue, forceValidation || this.state.forceValidation);
        return {fieldState, validation};
    }

    onFieldEvent(e: FormEvent, details?: any) {
        if(e == FIELD_EVENT.SUMBIT_VALUE){
            this.setState({forceValidation: true});
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
        let contextValue = fieldContext[field.id];
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
                        // TODO ?
                       contextValue={contextValue ? contextValue : undefined}/>
            </View>
        );
    }
}

const mapStateToProps = (state: FieldState, ownProps: FieldWrapperProps) => {
    return {
        ...ownProps,
        fieldContext: state.fieldContext,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<FieldValueAction>, ownProps: FieldWrapperProps) => {
    return {
        ... ownProps,
        setFieldValue: (id: string, value: string) => dispatch(setFieldValueAction(id, value)),
    }
};

export const FieldWrapper = connect(mapStateToProps, mapDispatchToProps)(FieldWrapperComponent);