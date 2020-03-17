import {FormElement} from "../model/FormElement";
import {useContext} from "react";
import {NavigationContext} from "./NavigationContext";
import {NavigationManager} from "./NavigationManager";

export type NavigationSetter<T extends FormElement> = (formElement: T) => void;

export const useNavigation: <T extends FormElement>() => NavigationManager = <T extends FormElement>() => {
    return useContext(NavigationContext);
};