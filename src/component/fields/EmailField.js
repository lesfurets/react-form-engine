import React from "react";

import {TextField} from "./TextField";

export class EmailField extends TextField {
    constructor(props) {
        super(props);
        this.inpuType = "email";
    }
}