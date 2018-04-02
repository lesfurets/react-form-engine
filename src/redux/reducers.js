import {combineReducers} from "redux";
import {SET_FIELD_VALUE} from "./constants";

const fieldContext = (state = {}, action) => {
    switch (action.type) {
        case SET_FIELD_VALUE:
            console.log(action.fieldId + ":" + action.fieldValue);
            return Object.assign({}, state, {
                [action.fieldId]: action.fieldValue
            });
        default:
            return state;
    }
};

const appReducer = combineReducers({
    fieldContext
});

export default appReducer