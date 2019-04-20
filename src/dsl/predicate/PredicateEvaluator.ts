import {Field, FieldContextState} from "../../definition/FormModel";
import {Predicate} from "./data/Predicate";
import {ReversedPredicate} from "./data/ReversedPredicate";
import {FieldPredicate, SelfPredicate} from "./data/PredicateTarget";
import {DefinedPredicate, EqualToFieldPredicate, EqualToPredicate} from "./data/ValuePredicate";
import {ValueUtils} from "../../definition/ValueUtils";

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

        return () => true;
    }

}