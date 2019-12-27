import {useDispatch, useSelector} from "react-redux";
import {FieldContext} from "../../redux/FieldContext";
import {setFieldValueAction, setNavigationAction} from "./actions";
import {FormElement} from "../model/FormElement";

export type NavigationSetter<T extends FormElement> = (formElement: T) => void;

const NAVIGATION_TARGET = "NAVIGATION_TARGET";

export const useNavigation: <T extends FormElement>() => [T, NavigationSetter<T>] = <T extends FormElement>() => {
    const navigationTarget: T = useSelector((state:FieldContext) => state.navigation[NAVIGATION_TARGET]);
    const dispatch = useDispatch();

    const setNavigationTarget = (formElement: T) => dispatch(setNavigationAction(NAVIGATION_TARGET, formElement));

    return [navigationTarget, setNavigationTarget];
};