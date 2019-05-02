import * as React from "react";
import {Field} from "../../definition/FormModel";
import {ReactNode} from "react";

export interface TextFieldProps {
    contextValue?: string,
    tabIndex?: number,
    onValueChange?: (value: string) => void,
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
        this.state = {
            value: props.contextValue || "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.getSuffix = this.getSuffix.bind(this);
    }

    handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    onBlur() {
        this.props.onValueChange!(this.state.value.trim());
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
                       value={this.state.value}
                       onChange={this.handleChange}
                       onBlur={this.onBlur}/>
                {this.getSuffix()}
            </div>
        );
    }
}