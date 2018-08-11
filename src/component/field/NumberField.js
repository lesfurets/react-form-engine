import React from "react";

import {TextField} from "./TextField";

export class NumberField extends TextField {
    constructor(props) {
        super(props);
        this.inputMode = "decimal";
    }

    getSuffix(){
        let symbol = this.props.field.symbol;
        return symbol ? <span className="TextField-symbol">{symbol}</span> : null
    }
}