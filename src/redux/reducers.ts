import {combineReducers, Reducer} from "redux";
import {FieldContextState, FieldValueAction, SET_FIELD_VALUE} from "./constants";

const fieldContext = (state: FieldContextState, action: FieldValueAction): Reducer<FieldContextState> => {
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