import {Field} from "../../../definition/FormModel";
import {FieldPredicateBuilder} from "./definition/FieldPredicateBuilder";
import {SelfPredicateBuilder} from "./definition/SelfPredicateBuilder";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";


export class Predicates {
    static field(field: Field) {
        return new FieldPredicateBuilder(field);
    }

    static self() {
        return new SelfPredicateBuilder();
    }

    static true() {
        return new TruePredicate();
    }

    static false() {
        return new FalsePredicate();
    }

}