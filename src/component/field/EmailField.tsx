import * as React from "react";
import {TextField, TextFieldProps} from "./TextField";

export const EmailField: React.FunctionComponent<TextFieldProps> =
    (props: TextFieldProps) => <TextField {...props} inputType="email" inputMode="email"/>;
