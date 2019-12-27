import * as React from "react";

import {InputField, InputFieldProps} from "../common/element/InputField";
import {FieldComponent} from "../../../definition/theme/field/FieldComponent";
import {FormEvent} from "../../../definition/event/Event";
import {FIELD_EVENT} from "../../../definition/event/events";
import {NumericField} from "../../../definition/model/fields/NumericField";

export const IntegerFieldComponent: FieldComponent<number, NumericField> =
    (props) => {
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
