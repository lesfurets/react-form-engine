import {FieldType} from "../FieldTypes";
import {Validation} from "../validation/Validation";
import {FormElement} from "./FormElement";
import {FormData} from "../data/FormData";

export class Field<T extends any> implements FormElement {
    id: string;
    type: FieldType;
    label?: string;
    getValidation?: (value: T, state: FormData) => Validation;
    isVisible?: (state: FormData) => boolean;
}

export class FieldValue implements FormElement {
    id: string;
    label: string;
}

export const FIELD_STATE = {
    DEFAULT: "field-default",
    VALID: "field-valid",
    ERROR: "field-error"
};