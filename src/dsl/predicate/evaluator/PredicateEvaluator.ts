import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {StringPredicateEvaluator} from "./StringPredicateEvaluator";
import {ValuePredicate} from "../data/leaf/value/ValuePredicate";
import {ValuePredicateEvaluator} from "./ValuePredicateEvaluator";
import {ValueUtils} from "../../../definition/ValueUtils";
import {Field} from "../../../definition/model/Field";
import {FormData} from "../../../definition/data/FormData";
import {NumberPredicate} from "../data/leaf/number/NumberPredicate";
import {NumberPredicateEvaluator} from "./NumberPredicateEvaluator";

export class PredicateEvaluator {

    static build(field: Field, predicate: Predicate):(context: FormData) => boolean {

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
            return (context: FormData) => !PredicateEvaluator.build(field, predicate.child)(context);
        }

        if(predicate instanceof ValuePredicate) {
            return ValuePredicateEvaluator.build(field, predicate);
        }

        if(predicate instanceof StringPredicate) {
            return (context: FormData) => ValueUtils.isDefined(context[field.id])
                && StringPredicateEvaluator.build(field, predicate)(context);
        }

        if(predicate instanceof NumberPredicate) {
            return (context: FormData) => ValueUtils.isDefined(context[field.id])
                && NumberPredicateEvaluator.build(field, predicate)(context);
        }

        return () => true;
    }

}