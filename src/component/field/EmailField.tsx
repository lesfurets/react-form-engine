import * as React from "react";
import {FieldComponent, FieldComponentProps} from "../../definition/component/FieldComponent";
import {InputField} from "./element/InputField";

export const EmailField: FieldComponent<string> =
    (props: FieldComponentProps<string>) => <InputField {...props} inputType="email" inputMode="email"/>;
