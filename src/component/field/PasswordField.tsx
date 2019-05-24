import * as React from "react";
import {TextField, TextFieldProps} from "./TextField";

export const PasswordField: React.FunctionComponent<TextFieldProps> =
    (props: TextFieldProps) => <TextField {...props} inputType="password"/>;