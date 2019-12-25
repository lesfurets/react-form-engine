import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../../definition/theme/field/FieldComponent";
import {InputField} from "../common/element/InputField";

export const EmailField: FieldComponent<string> =
    (props: FieldComponentProps<string>) => <InputField {...props} inputType="email" inputMode="email"/>;
