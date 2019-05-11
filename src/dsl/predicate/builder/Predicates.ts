import {FieldPredicateBuilder} from "./definition/FieldPredicateBuilder";
import {SelfPredicateBuilder} from "./definition/SelfPredicateBuilder";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {Field} from "../../../definition/model/Field";


export class Predicates {
    static field(field: Field) {
        return new FieldPredicateBuilder(field);
    }

    static self = new SelfPredicateBuilder();

    static true =new TruePredicate();

    static false =new FalsePredicate();

}