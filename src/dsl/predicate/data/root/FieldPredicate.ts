import {Predicate} from "../Predicate";
import {PredicateRoot} from "./PredicateRoot";
import {Field} from "../../../../definition/model/Field";

export class FieldPredicate extends PredicateRoot{
    field: Field;
    predicate: Predicate;

    constructor(field: Field, predicate: Predicate) {
        super();
        this.field = field;
        this.predicate = predicate;
    }
}