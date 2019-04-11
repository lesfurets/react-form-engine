import {combineReducers, Reducer} from "redux";
import {FieldValueAction, SET_FIELD_VALUE} from "./constants";
import {FieldContextState} from "../definition/FormModel";

const fieldContext : Reducer<FieldContextState> = (state: FieldContextState = {}, action: FieldValueAction) => {
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