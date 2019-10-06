import * as React from "react";

import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../../definition/component/FieldComponent";
import {FormEvent} from "../../../definition/event/Event";
import {FIELD_EVENT} from "../../../definition/event/events";

export const IntegerField: FieldComponent<number> =
    (props: InputFieldProps<number>) => {
        const contextValue = props.contextValue ? props.contextValue.toLocaleString("latn") : "";
        const onFieldEvent = (e: FormEvent, details: string) => {
            switch (e) {
                case FIELD_EVENT.RESET_VALUE:
                    props.onFieldEvent!(e);
                    break;
                default:
                    let number = parseInt(details!.replace(/\s/g, ""));
                    if(!isNaN(number)){
                        props.onFieldEvent!(e, number);
                    }
            }
        };

        return (
            <InputField {...props} inputMode="decimal"
                        contextValue={contextValue}
                        onFieldEvent={onFieldEvent}>
                {props.field.symbol ? <span className="TextField-symbol">{props.field.symbol}</span> : null}
            </InputField>
        );
    };
