import {NavigationAction, SET_NAVIGATION} from "./constants";

export const setNavigationAction = (id: string, value: any): NavigationAction => ({
    type: SET_NAVIGATION,
    navigationdId: id,
    navigationdValue: value,
});