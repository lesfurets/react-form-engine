import {FieldValueAction, NavigationAction, SET_FIELD_VALUE, SET_NAVIGATION} from "./constants";
import {FormElement} from "../model/FormElement";

export const setFieldValueAction = (id: string, value: any): FieldValueAction => ({
    type: SET_FIELD_VALUE,
    fieldId: id,
    fieldValue: value,
});

export const setNavigationAction = (id: string, value: any): NavigationAction => ({
    type: SET_NAVIGATION,
    navigationdId: id,
    navigationdValue: value,
});