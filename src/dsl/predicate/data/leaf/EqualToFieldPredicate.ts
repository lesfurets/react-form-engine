import {PredicateLeaf} from "../PredicateLeaf";
import {Field} from "../../../../definition/FormModel";

export class EqualToFieldPredicate extends PredicateLeaf {
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}