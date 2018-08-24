import {Event, EventTypes} from "./Event";

export const BLOCK_EVENT = {
    NEXT: new Event("NEXT", EventTypes.Block),
    PREVIOUS: new Event("PREVIOUS", EventTypes.Block),
    VALIDATED: new Event("VALIDATED", EventTypes.Block),
};

export const FIELD_EVENT = {
    SET_VALUE: new Event("set-value", EventTypes.Field),
};