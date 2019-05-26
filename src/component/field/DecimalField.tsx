import * as React from "react";

import {InputField, InputFieldProps} from "./element/InputField";
import {FieldComponent} from "../../definition/component/FieldComponent";
import {FormEvent} from "../../definition/event/Event";
import {FIELD_EVENT} from "../../definition/event/events";
import {useState} from "react";

const UNSTABLE_STATE = /[,]$|[,].*0$/;


const manageNewValue = (event: FormEvent, details: string, setUnstable: (value: any) => void, onFieldEvent?: (e: FormEvent, details?: number) => void) => {
    let number = parseFloat(details!.replace(/\s/g, "").replace(',', "."));
    if(!isNaN(number)){
        setUnstable(undefined);
        onFieldEvent!(event, number);
    }
};

export const DecimalField: FieldComponent<number> =
    (props: InputFieldProps<number>) => {
        const [unstable, setUnstable] = useState();

        const contextValue = props.contextValue ? props.contextValue.toLocaleString("latn") : "";
        const onFieldEvent = (e: FormEvent, details: string) => {
            switch (e) {
                case FIELD_EVENT.RESET_VALUE:
                    setUnstable(undefined);
                    props.onFieldEvent!(e);
                    break;
                case FIELD_EVENT.UPDATE_VALUE:
                    if(UNSTABLE_STATE.test(details)) {
                        setUnstable(details.replace('.', ","));
                    } else {
                        manageNewValue(e,details,setUnstable, props.onFieldEvent);
                    }
                    break;
                default:
                    manageNewValue(e,details,setUnstable, props.onFieldEvent);
            }
        };

        return (
            <InputField {...props} inputMode="decimal"
                        contextValue={unstable || contextValue}
                        onFieldEvent={onFieldEvent}>
                {props.field.symbol ? <span className="TextField-symbol">{props.field.symbol}</span> : null}
            </InputField>
        );
    }
