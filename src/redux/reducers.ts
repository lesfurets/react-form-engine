import {combineReducers, Reducer} from "redux";
import {FieldValueAction, SET_FIELD_VALUE} from "./constants";
import {FieldContext} from "../definition/FormModel";

export interface FieldState {
    fieldContext : FieldContext
}

const fieldContext : Reducer<FieldContext> = (state: FieldContext = {}, action: FieldValueAction) => {
    switch (action.type) {
        case SET_FIELD_VALUE:
            return {...state, [action.fieldId]: action.fieldValue};
        default:
            return state;
    }
};

const appReducer = combineReducers({
    fieldContext
});

export default appReducer