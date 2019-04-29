import {Field, FieldContext} from "../../../definition/FormModel";
import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {ValueUtils} from "../../../definition/ValueUtils";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {DefinedPredicate} from "../data/leaf/DefinedPredicate";
import {StringEqualToPredicate} from "../data/leaf/StringEqualToPredicate";
import {EqualToFieldPredicate} from "../data/leaf/EqualToFieldPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {StringCheckPredicate} from "../data/leaf/StringCheckPredicate";
import {StringPredicate} from "../data/leaf/StringPredicate";
import {ValuePredicate} from "../data/leaf/ValuePredicate";

export class ValuePredicateEvaluator {

    static build(field: Field, predicate: ValuePredicate):(context: FieldContext) => boolean {
        if(predicate instanceof DefinedPredicate) {
            return (context: FieldContext) => ValueUtils.isDefined(context[field.id]);
        }

        if(predicate instanceof EqualToFieldPredicate) {
            return (context: FieldContext) => context[field.id] === context[predicate.field.id];
        }

        return () => true;
    }

}