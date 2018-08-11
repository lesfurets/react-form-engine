import React from "react";

import {TextField} from "./TextField";

export class PasswordField extends TextField {
    constructor(props) {
        super(props);
        this.inpuType = "password";
    }
}