import * as React from "react";
import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../../definition/component/FieldComponent";

export const PasswordField: FieldComponent<string> =
    (props: InputFieldProps<string>) => <InputField {...props} inputType="password"/>;