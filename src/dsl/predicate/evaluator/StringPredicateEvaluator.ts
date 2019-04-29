import {Field, FieldContext} from "../../../definition/FormModel";
import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {ValueUtils} from "../../../definition/ValueUtils";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {ValueDefinedPredicate} from "../data/leaf/value/ValueDefinedPredicate";
import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {ValueEqualToFieldPredicate} from "../data/leaf/value/ValueEqualToFieldPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {StringCheckPredicate} from "../data/leaf/string/StringCheckPredicate";
import {StringPredicate} from "../data/leaf/string/StringPredicate";
import {StringEmptyPredicate} from "../data/leaf/string/StringEmptyPredicate";

export class StringPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FieldContext) => boolean {
        if(predicate instanceof StringEqualToPredicate) {
            return (context: FieldContext) => context[field.id] === predicate.value;
        }

        if(predicate instanceof StringCheckPredicate) {
            return (context: FieldContext) => predicate.test(<string>context[field.id]);
        }

        if(predicate instanceof StringEmptyPredicate) {
            return (context: FieldContext) => (<string>context[field.id]).length === 0;
        }

        return () => true;
    }

}