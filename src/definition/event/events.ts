import {FormEvent, EventTypes} from "./Event";

export const BLOCK_EVENT = {
    NEXT: new FormEvent("NEXT", EventTypes.Block),
    PREVIOUS: new FormEvent("PREVIOUS", EventTypes.Block),
    VALIDATED: new FormEvent("VALIDATED", EventTypes.Block),
};

export const FIELD_EVENT = {
    RESET_VALUE: new FormEvent("reset-value", EventTypes.Field),
    UPDATE_VALUE: new FormEvent("set-value", EventTypes.Field),
    SUMBIT_VALUE: new FormEvent("sumbit-value", EventTypes.Field),
};