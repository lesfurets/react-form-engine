import {SET_FIELD_VALUE} from "./constants";

export const setFieldValueAction = (id, value) => {
    return {
        type: SET_FIELD_VALUE,
        fieldId: id,
        fieldValue: value
    }
};