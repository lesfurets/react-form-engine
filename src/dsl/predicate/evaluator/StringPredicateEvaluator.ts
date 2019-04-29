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

export class StringPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FieldContext) => boolean {
        if(predicate instanceof StringEqualToPredicate) {
            return (context: FieldContext) => context[field.id] === predicate.value;
        }

        if(predicate instanceof StringCheckPredicate) {
            return (context: FieldContext) => predicate.test(<string>context[field.id]);
        }

        return () => true;
    }

}