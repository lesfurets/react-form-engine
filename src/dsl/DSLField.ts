import {Field} from "../definition/model/Field";
import {ValidationRule} from "./validation/ValidationRule";
import {VisibilityRule} from "./visibility/VisibilityRule";

export type DSLField<T extends Field> = Field & FieldWithRules;

export class FieldWithRules {
    validationRule?: ValidationRule;
    visibilityRule?: VisibilityRule;
}