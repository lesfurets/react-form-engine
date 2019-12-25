import * as React from "react";
import {InputField, InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";

export const PasswordField: FieldComponent<string> =
    (props: InputFieldProps<string>) => <InputField {...props} inputType="password"/>;