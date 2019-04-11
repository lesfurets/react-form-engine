import {Action} from "redux";

export const SET_FIELD_VALUE = 'SET_VALUE_VALUE';

export interface FieldValueAction extends Action {
    type: typeof SET_FIELD_VALUE
    fieldId: string,
    fieldValue: string
}

