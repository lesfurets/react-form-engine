import {Field, FieldContext} from "../../../definition/FormModel";
import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {StringPredicate} from "../data/leaf/StringPredicate";
import {StringPredicateEvaluator} from "./StringPredicateEvaluator";
import {ValuePredicate} from "../data/leaf/ValuePredicate";
import {ValuePredicateEvaluator} from "./ValuePredicateEvaluator";

export class PredicateEvaluator {

    static build(field: Field, predicate: Predicate):(context: FieldContext) => boolean {

        if(predicate instanceof TruePredicate) {
            return () => true;
        }

        if(predicate instanceof FalsePredicate) {
            return () => false;
        }

        if(predicate instanceof SelfPredicate) {
            return PredicateEvaluator.build(field, predicate.predicate);
        }

        if(predicate instanceof FieldPredicate) {
            return PredicateEvaluator.build(predicate.field, predicate.predicate);
        }

        if(predicate instanceof ReversedPredicate) {
            return (context: FieldContext) => !PredicateEvaluator.build(field, predicate.child)(context);
        }

        if(predicate instanceof ValuePredicate) {
            return ValuePredicateEvaluator.build(field, predicate);
        }

        if(predicate instanceof StringPredicate) {
            return StringPredicateEvaluator.build(field, predicate);
        }

        return () => true;
    }

}