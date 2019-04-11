import {FieldTypes} from "./FieldTypes";

export class Field {
    id: string;
    type: FieldTypes;
    label: string;
    // TODO
    validationRule? : any;
    // TODO
    visibilityRule? : any;
    // TODO rename 'isValid' ?
    getValidation : (state: FieldContextState) => any;
    // TODO
    isVisible : (state: FieldContextState) => boolean
}

export class Block {
    id: string;
    label: string;
    fields: Field[]
}

export class Form {
    id: string;
    label: string;
    fields: Block[]
}

export type FieldContextState = {
    [fieldId: string]: string
}