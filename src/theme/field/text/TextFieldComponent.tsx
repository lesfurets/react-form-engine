import * as React from "react";
import {InputField, InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {TextField} from "../../../definition/model/fields/TextField";

export const TextFieldComponent: FieldComponent<string, TextField> =
    (props: InputFieldProps<string>) => <InputField {...props}/>;