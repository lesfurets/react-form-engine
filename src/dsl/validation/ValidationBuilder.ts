import {ValidationRule} from "./ValidationRule";
import {FieldPredicate2} from "../predicate/FieldPredicate";
import {Validation} from "../../definition/validation/Validation";

export class ValidationBuilder {

    validation: Validation;

    constructor(validation: Validation) {
        this.validation = validation;
    }

    when(predicate: FieldPredicate2) {
        return new ValidationRule(this.validation, predicate);
    }

    static hasVisibility(validation: Validation) {
        return new ValidationBuilder(validation)
    }

    static error(message: string) {
        return ValidationBuilder.hasVisibility(new Validation(false, message));
    }

}