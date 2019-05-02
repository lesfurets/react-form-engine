import {TextField, TextFieldProps} from "./TextField";

export class EmailField extends TextField {
    constructor(props: TextFieldProps) {
        super(props);
        this.inputType = "email";
        this.inputMode = "email";
    }
}