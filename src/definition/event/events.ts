import {FormEvent, EventTypes} from "./Event";

export const BLOCK_EVENT = {
    NEXT: new FormEvent("NEXT", EventTypes.Block),
    PREVIOUS: new FormEvent("PREVIOUS", EventTypes.Block),
    VALIDATED: new FormEvent("VALIDATED", EventTypes.Block),
};

export const FIELD_EVENT = {
    SET_VALUE: new FormEvent("set-value", EventTypes.Field),
};