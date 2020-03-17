import {Action} from "redux";

export const SET_NAVIGATION = 'SET_NAVIGATION';

export interface NavigationAction extends Action {
    type: typeof SET_NAVIGATION
    navigationdId: string,
    navigationdValue: any,
}

