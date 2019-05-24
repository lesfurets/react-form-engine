import * as React from "react";
import {FIELD_EVENT} from "../../definition/event/events";
import {FormEvent} from "../../definition/event/Event";
import {Field} from "../../definition/model/Field";

export interface InputFieldProps<T> {
    tabIndex?: number,
    onFieldEvent?: (e: FormEvent, details?: any) => void,
    field: Field,
    inputType?: string,
    inputMode?: string,
    contextValue?: any,
    valueFromString?: (value: string) => T,
    valueToString?: (value: T) => string
}

export interface InputFieldState {
    value: string;
}

export class InputField<T> extends React.Component<InputFieldProps<T>, InputFieldState> {

    static defaultProps = {
        tabIndex: 0,
        inputType: "text",
        inputMode: "text",
    };

    constructor(props: InputFieldProps<T>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.props.onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, this.props.valueFromString!(event.target.value.trim()));
    }

    onBlur() {
        this.props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, this.props.contextValue);
    }

    render() {
        let {field, tabIndex, children, inputType, inputMode, valueToString} = this.props;
        return (
            <div className="TextField-container">
                <input type={inputType}
                       inputMode={inputMode}
                       placeholder={field!.placeholder || ""}
                       name={field!.id}
                       id={field!.id}
                       tabIndex={tabIndex}
                       value={valueToString!(this.props.contextValue! as T) || ""}
                       onChange={this.handleChange}
                       onBlur={this.onBlur}/>
                {children}
            </div>
        );
    }
}