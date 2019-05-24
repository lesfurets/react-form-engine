import * as React from "react";

import {InputField, InputFieldProps} from "./InputField";

export type NumberFieldProps = InputFieldProps<number>;

export const IntegerField: React.FunctionComponent<NumberFieldProps> =
    (props: NumberFieldProps) => (
        <InputField<number> {...props}
                            inputMode="decimal"
                            valueFromString={(value: string) => parseInt(value.replace(/\s/g,""))}
                            valueToString={(value: number) => value ? value.toLocaleString() : ""}>
            {props.field.symbol ? <span className="TextField-symbol">{props.field.symbol}</span> : null}
        </InputField>
    );