import * as React from "react";

import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FormEvent} from "../../definition/event/Event";

export const IntegerField: FieldComponent<number> =
    (props: InputFieldProps<number>) => {
        const contextValue = props.contextValue ? props.contextValue.toLocaleString() : "";
        const onFieldEvent = (e: FormEvent, details: string) =>
            props.onFieldEvent!(e, parseInt(details!.replace(/\s/g, "")));

        return (
            <InputField {...props} inputMode="decimal"
                        contextValue={contextValue}
                        onFieldEvent={onFieldEvent}>
                {props.field.symbol ? <span className="TextField-symbol">{props.field.symbol}</span> : null}
            </InputField>
        );
    };
