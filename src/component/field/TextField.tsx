import * as React from "react";
import {InputField, InputFieldProps} from "./InputField";

export type TextFieldProps = InputFieldProps<string>;

export const TextField: React.FunctionComponent<TextFieldProps> =
    (props: TextFieldProps) => <InputField<string> {...props}
                                                   valueFromString={value => value}
                                                   valueToString={value => value}/>;