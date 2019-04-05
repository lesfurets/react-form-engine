import {FieldValueAction, SET_FIELD_VALUE} from "./constants";

export const setFieldValueAction = (id: string, value: string): FieldValueAction => ({
    type: SET_FIELD_VALUE,
    fieldId: id,
    fieldValue: value
});