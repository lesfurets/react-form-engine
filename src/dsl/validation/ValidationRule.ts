import {Validation} from "../../definition/validation/Validation";
import {FieldPredicate} from "../predicate/FieldPredicate";

export class ValidationRule {

    validation: Validation;
    predicate: FieldPredicate;

    constructor(validation: Validation, predicate: FieldPredicate) {
        this.validation = validation;
        this.predicate = predicate;
    }

}