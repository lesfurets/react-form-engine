import {FormElement} from "../model/FormElement";
import {useState} from "react";

export type NavigationSetter = (formElement: FormElement) => void;

export type NavigationManager = {currentStep: FormElement, setCurrentStep: NavigationSetter};