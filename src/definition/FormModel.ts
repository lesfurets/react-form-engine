import {FieldTypes} from "./FieldTypes";
import {Validation} from "./validation/Validation";
import {ValidationRule} from "../dsl/validation/ValidationRule";
import {VisibilityRule} from "../dsl/visibility/VisibilityRule";

export interface FormElement {
    id: string;
}

export class Field implements FormElement {
    id: string;
    type: FieldTypes;
    label?: string;
    validationRule? : ValidationRule;
    visibilityRule? : VisibilityRule;
    // TODO rename 'isValid' ?
    getValidation?: (state: FieldContext) => Validation;
    isVisible?: (state: FieldContext) => boolean
}

export class Block implements FormElement{
    id: string;
    label: string;
    fields: Field[]
}

export class Form implements FormElement{
    id: string;
    label: string;
    fields: Block[]
}

export type FieldContext = {
    [fieldId: string]: string | null
}