import {FormEvent, EventTypes} from "./Event";

export const FormEvents = {
    DONE: new FormEvent("DONE", EventTypes.Form),
};

export const BlockEvents = {
    NEXT: new FormEvent("NEXT", EventTypes.Block),
    PREVIOUS: new FormEvent("PREVIOUS", EventTypes.Block),
    VALIDATED: new FormEvent("VALIDATED", EventTypes.Block),
};

export const FieldEvents = {
    SET_VALUE: new FormEvent("set-value", EventTypes.Field),
};

export const FieldComponentEvents = {
    RESET_VALUE: new FormEvent("reset-value", EventTypes.Field),
    UPDATE_VALUE: new FormEvent("update-value", EventTypes.Field),
    SUMBIT_VALUE: new FormEvent("sumbit-value", EventTypes.Field),
};