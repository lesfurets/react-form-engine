import {FormElement} from "../model/FormElement";

export type NavigationSetter = (formElement: FormElement) => void;

export type NavigationManager = {currentStep: FormElement, setCurrentStep: NavigationSetter};