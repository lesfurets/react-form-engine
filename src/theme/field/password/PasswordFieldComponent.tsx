import * as React from "react";
import {InputField, InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {TextField} from "../../../definition/model/fields/TextField";

export const PasswordFieldComponent: FieldComponent<string, TextField> =
    (props) => <InputField {...props} inputType="password"/>;