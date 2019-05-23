import * as React from "react";
import {ReactNode} from "react";
import {FormEvent} from "../../definition/event/Event";
import {FIELD_EVENT} from "../../definition/event/events";
import {Field} from "../../definition/model/Field";

export interface TextFieldProps {
    contextValue?: string,
    tabIndex?: number,
    onFieldEvent?: (e: FormEvent, details?: any) => void,
    field: Field
}

export interface TextFieldState {
    value: string;
}

export class TextField extends React.Component<TextFieldProps, TextFieldState> {

    static defaultProps = {
        tabIndex: 0
    };

    inputType : string;
    inputMode : string;

    constructor(props : TextFieldProps) {
        super(props);
        this.inputType = "text";
        this.inputMode = "text";
        this.getSuffix = this.getSuffix.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.parseValue = this.parseValue.bind(this);
    }

    parseValue(value: any):any {
        return value;
    }

    handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        this.props.onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, this.parseValue(event.target.value.trim()));
    }

    onBlur() {
        this.props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, this.parseValue((this.props.contextValue || "").trim()));
    }

    getSuffix() : ReactNode {
        return null;
    }

    render() {
        let {field, tabIndex} = this.props;
        return (
            <div className="TextField-container">
                <input type={this.inputType}
                       inputMode={this.inputMode}
                       placeholder={field!.placeholder || ""}
                       name={field!.id}
                       id={field!.id}
                       tabIndex={tabIndex}
                       value={this.props.contextValue || ""}
                       onChange={this.handleChange}
                       onBlur={this.onBlur}/>
                {this.getSuffix()}
            </div>
        );
    }
}