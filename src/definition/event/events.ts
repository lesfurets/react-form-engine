import {FormEvent, EventTypes} from "./Event";

export const FORM_EVENT = {
    DONE: new FormEvent("DONE", EventTypes.Form),
};

export const BLOCK_EVENT = {
    NEXT: new FormEvent("NEXT", EventTypes.Block),
    PREVIOUS: new FormEvent("PREVIOUS", EventTypes.Block),
    VALIDATED: new FormEvent("VALIDATED", EventTypes.Block),
};

export const FIELD_EVENT = {
    SET_VALUE: new FormEvent("set-value", EventTypes.Field),
    RESET_VALUE: new FormEvent("reset-value", EventTypes.Field),
    UPDATE_VALUE: new FormEvent("update-value", EventTypes.Field),
    SUMBIT_VALUE: new FormEvent("sumbit-value", EventTypes.Field),
};