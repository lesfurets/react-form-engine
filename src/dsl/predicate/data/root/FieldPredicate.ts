import {Predicate} from "../Predicate";
import {Field} from "../../../../definition/FormModel";
import {PredicateRoot} from "../PredicateRoot";

export class FieldPredicate extends PredicateRoot{
    field: Field;
    predicate: Predicate;

    constructor(field: Field, predicate: Predicate) {
        super();
        this.field = field;
        this.predicate = predicate;
    }
}