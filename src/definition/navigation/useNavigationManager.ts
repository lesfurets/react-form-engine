import {FormElement} from "../model/FormElement";
import {useState} from "react";
import {NavigationManager} from "./NavigationManager";

export const useNavigationManager: (initialStep: FormElement) => NavigationManager = (initialStep) => {
    const [currentStep, setCurrentStep] = useState<FormElement>(initialStep);
    return {currentStep, setCurrentStep}
};