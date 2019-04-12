import {FieldTypes} from "./FieldTypes";
import {Validation} from "./validation/Validation";

export interface FormElement {
    id: string;
}

export class Field implements FormElement {
    id: string;
    type: FieldTypes;
    label: string;
    // TODO rename 'isValid' ?
    getValidation : (state: FieldContextState) => Validation;
    // TODO
    isVisible : (state: FieldContextState) => boolean
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

export type FieldContextState = {
    [fieldId: string]: string
}