import {combineReducers, Reducer} from "redux";
import {FieldValueAction, NavigationAction, SET_FIELD_VALUE, SET_NAVIGATION} from "./constants";
import {FieldContext} from "../FieldContext";
import {NavigationContext} from "../NavigationContext";

export interface FieldState {
    fieldContext : FieldContext
}

const fieldContext : Reducer<FieldContext> = (state: FieldContext = {}, action: FieldValueAction) => {
    if (action.type === SET_FIELD_VALUE) {
        return {...state, [action.fieldId]: action.fieldValue};
    } else {
        return state;
    }
};

const navigation : Reducer<NavigationContext> = (state: NavigationContext = {}, action: NavigationAction) => {
    if (action.type === SET_NAVIGATION) {
        return {...state, [action.navigationdId]: action.navigationdValue};
    } else {
        return state;
    }
};

const appReducer = combineReducers({
    fieldContext,
    navigation
});

export default appReducer