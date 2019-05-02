import {TextField, TextFieldProps} from "./TextField";

export class PasswordField extends TextField {
    constructor(props: TextFieldProps) {
        super(props);
        this.inputType = "password";
    }
}