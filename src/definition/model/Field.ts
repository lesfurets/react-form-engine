import {FieldType, FieldTypes} from "../FieldTypes";
import {ValidationRule} from "../../dsl/validation/ValidationRule";
import {VisibilityRule} from "../../dsl/visibility/VisibilityRule";
import {Validation} from "../validation/Validation";
import {FormElement} from "./FormElement";
import {FieldContext} from "../../redux/FieldContext";

export class Field implements FormElement {
    id: string;
    type: FieldType;
    label?: string;
    validationRule?: ValidationRule;
    visibilityRule?: VisibilityRule;
    // TODO rename 'isValid' ?
    getValidation?: (state: FieldContext) => Validation;
    isVisible?: (state: FieldContext) => boolean;
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