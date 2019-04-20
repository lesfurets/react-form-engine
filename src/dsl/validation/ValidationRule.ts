import {Validation} from "../../definition/validation/Validation";
import {FieldPredicate2} from "../predicate/FieldPredicate";

export class ValidationRule {

    validation: Validation;
    predicate: FieldPredicate2;

    constructor(validation: Validation, predicate: FieldPredicate2) {
        this.validation = validation;
        this.predicate = predicate;
    }

}