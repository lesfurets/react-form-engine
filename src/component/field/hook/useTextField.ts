import {FIELD_EVENT} from "../../../definition/event/events";
import {FormEvent} from "../../../definition/event/Event";
import * as React from "react";

export const useTextField = (onFieldEvent?: (e: FormEvent, details?: string) => void) => {
    return [(event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (value === "") {
            onFieldEvent!(FIELD_EVENT.RESET_VALUE)
        } else {
            onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, value.trim());
        }
    }];
}
