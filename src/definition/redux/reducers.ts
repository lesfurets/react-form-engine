import {combineReducers, Reducer} from "redux";
import {NavigationAction, SET_NAVIGATION} from "./constants";
import {FormData} from "../../redux/FormData";
import {NavigationContext} from "../../redux/NavigationContext";

export interface FieldState {
    fieldContext : FormData
}

const navigation : Reducer<NavigationContext> = (state: NavigationContext = {}, action: NavigationAction) => {
    if (action.type === SET_NAVIGATION) {
        return {...state, [action.navigationdId]: action.navigationdValue};
    } else {
        return state;
    }
};

const appReducer = combineReducers({
    navigation
});

export default appReducer