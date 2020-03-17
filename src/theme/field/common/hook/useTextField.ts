import {FieldComponentEvents, FieldEvents} from "../../../../definition/event/events";
import {FormEvent} from "../../../../definition/event/Event";
import * as React from "react";

export const useTextField = (onFieldEvent?: (e: FormEvent, details?: string) => void) => {
    return [(event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (value === "") {
            onFieldEvent!(FieldComponentEvents.RESET_VALUE)
        } else {
            onFieldEvent!(FieldComponentEvents.UPDATE_VALUE, value.trim());
        }
    }];
}
