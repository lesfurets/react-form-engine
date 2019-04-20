import {FieldPredicateBuilder, SelfPredicateBuilder} from "./PredicateTargetBuilder";
import {Field} from "../../../definition/FormModel";

export class Predicates2 {
    static field(field: Field) {
        return new FieldPredicateBuilder(field);
    }

    static self() {
        return new SelfPredicateBuilder();
    }

}