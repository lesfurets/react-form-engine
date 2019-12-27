import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../../definition/theme/field/FieldComponent";
import {InputField} from "../common/element/InputField";
import {TextField} from "../../../definition/model/fields/TextField";

export const EmailFieldComponent: FieldComponent<string, TextField> =
    (props) => <InputField {...props} inputType="email" inputMode="email"/>;
