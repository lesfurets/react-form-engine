import {Field, FieldContextState} from "../../definition/FormModel";
import {Predicate} from "./data/Predicate";
import {ReversedPredicate} from "./data/operation/ReversedPredicate";
import {ValueUtils} from "../../definition/ValueUtils";
import {SelfPredicate} from "./data/root/SelfPredicate";
import {FieldPredicate} from "./data/root/FieldPredicate";
import {DefinedPredicate} from "./data/leaf/DefinedPredicate";
import {EqualToPredicate} from "./data/leaf/EqualToPredicate";
import {EqualToFieldPredicate} from "./data/leaf/EqualToFieldPredicate";
import {TruePredicate} from "./data/root/TruePredicate";
import {FalsePredicate} from "./data/root/FalsePredicate";

export class PredicateEvaluator {

    static build(field: Field, predicate: Predicate):(context: FieldContextState) => boolean {

        // Target Predicates
        if(predicate instanceof SelfPredicate) {
            return PredicateEvaluator.build(field, predicate.predicate);
        }

        if(predicate instanceof FieldPredicate) {
            return PredicateEvaluator.build(predicate.field, predicate.predicate);
        }

        // Middle Predicates
        if(predicate instanceof ReversedPredicate) {
            return (context: FieldContextState) => !PredicateEvaluator.build(field, predicate.child)(context);
        }

        // Values Predicates
        if(predicate instanceof DefinedPredicate) {
            return (context: FieldContextState) => ValueUtils.isDefined(context[field.id]);
        }

        if(predicate instanceof EqualToPredicate) {
            return (context: FieldContextState) => {
                return context[field.id] === predicate.value;
            }
        }

        if(predicate instanceof EqualToFieldPredicate) {
            return (context: FieldContextState) => context[field.id] === context[predicate.field.id];
        }

        if(predicate instanceof TruePredicate) {
            return () => true;
        }

        if(predicate instanceof FalsePredicate) {
            return () => false;
        }

        return () => true;
    }

}