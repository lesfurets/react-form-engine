import {Field} from "../../../definition/FormModel";
import {FieldPredicateBuilder} from "./definition/FieldPredicateBuilder";
import {SelfPredicateBuilder} from "./definition/SelfPredicateBuilder";


export class Predicates {
    static field(field: Field) {
        return new FieldPredicateBuilder(field);
    }

    static self() {
        return new SelfPredicateBuilder();
    }

}