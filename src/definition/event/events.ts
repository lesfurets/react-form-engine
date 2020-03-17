import {FormEvent, EventTypes} from "./Event";

export const FormEvents = {
    DONE: new FormEvent("DONE", EventTypes.Form),
};

export const BlockEvents = {
    PREVIOUS: new FormEvent("PREVIOUS", EventTypes.Block),
    VALIDATED: new FormEvent("VALIDATED", EventTypes.Block),
};

export const BlockViewEvents = {
    REQUEST_NEXT: new FormEvent("NEXT", EventTypes.BlockView),
    REQUEST_PREVIOUS: new FormEvent("PREVIOUS", EventTypes.BlockView),
};

export const FieldEvents = {
    SET_VALUE: new FormEvent("set-value", EventTypes.Field),
};

export const FieldComponentEvents = {
    RESET_VALUE: new FormEvent("reset-value", EventTypes.FieldComponent),
    UPDATE_VALUE: new FormEvent("update-value", EventTypes.FieldComponent),
    SUMBIT_VALUE: new FormEvent("sumbit-value", EventTypes.FieldComponent),
};