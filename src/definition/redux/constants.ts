import {Action} from "redux";
import {FormElement} from "../model/FormElement";

export const SET_FIELD_VALUE = 'SET_VALUE_VALUE';
export const SET_NAVIGATION = 'SET_NAVIGATION';

export interface FieldValueAction extends Action {
    type: typeof SET_FIELD_VALUE
    fieldId: string,
    fieldValue: any,
}

export interface NavigationAction extends Action {
    type: typeof SET_NAVIGATION
    navigationdId: string,
    navigationdValue: any,
}

