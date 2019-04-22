import {Field} from "../../../definition/FormModel";
import {FieldPredicateBuilder, SelfPredicateBuilder} from "./PredicateTargetBuilder";


export class Predicates {
    static field(field: Field) {
        return new FieldPredicateBuilder(field);
    }

    static self() {
        return new SelfPredicateBuilder();
    }

}