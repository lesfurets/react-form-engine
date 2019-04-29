import {Field} from "../../../../../definition/FormModel";
import {ValuePredicate} from "./ValuePredicate";

export class ValueEqualToFieldPredicate extends ValuePredicate {
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}