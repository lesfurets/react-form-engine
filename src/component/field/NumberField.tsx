import * as React from "react";

import {TextField, TextFieldProps} from "./TextField";
import {ReactNode} from "react";

export class NumberField extends TextField {
    constructor(props: TextFieldProps) {
        super(props);
        this.inputMode = "decimal";
    }

    getSuffix() : ReactNode {
        let symbol = this.props.field.symbol;
        return symbol ? <span className="TextField-symbol">{symbol}</span> : null
    }

    parseValue(value: any): any {
        return parseInt(value);
    }
}