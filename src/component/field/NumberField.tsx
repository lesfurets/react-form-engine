import * as React from "react";

import {InputField, InputFieldProps} from "./InputField";

export type NumberFieldProps = InputFieldProps<number>;

export const NumberField: React.FunctionComponent<NumberFieldProps> =
    (props: NumberFieldProps) => (
        <InputField<number> {...props}
                            inputMode=""
                            valueFromString={(value: string) => parseInt(value)}
                            valueToString={(value: number) => value ? value.toString() : ""}>
            {props.field.symbol ? <span className="TextField-symbol">{props.field.symbol}</span> : null}
        </InputField>
    );