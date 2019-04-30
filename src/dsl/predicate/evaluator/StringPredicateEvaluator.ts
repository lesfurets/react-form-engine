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
import {StringContainPredicate} from "../data/leaf/string/StringContainPredicate";
import {StringStartWithPredicate} from "../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../data/leaf/string/StringEndWithPredicate";
import {StringRegExpPredicate} from "../data/leaf/string/StringRegExpPredicate";

export class StringPredicateEvaluator {

    static build(field: Field, predicate: StringPredicate):(context: FieldContext) => boolean {
        switch(predicate.constructor) {
            case StringEqualToPredicate:
                return (context: FieldContext) => context[field.id] === (<StringEqualToPredicate>predicate).value;
            case StringCheckPredicate:
                return (context: FieldContext) => (<StringCheckPredicate>predicate).test(<string>context[field.id]);
            case StringEmptyPredicate:
                return (context: FieldContext) => (<string>context[field.id]).length === 0;
            case StringContainPredicate:
                return (context: FieldContext) => (<string>context[field.id]).includes((<StringContainPredicate>predicate).value);
            case StringStartWithPredicate:
                return (context: FieldContext) => (<string>context[field.id]).startsWith((<StringStartWithPredicate>predicate).value);
            case StringEndWithPredicate:
                return (context: FieldContext) => (<string>context[field.id]).endsWith((<StringEndWithPredicate>predicate).value);
            case StringRegExpPredicate:
                return (context: FieldContext) => (<StringRegExpPredicate>predicate).regExp.test(<string>context[field.id]);
            default:
                return () => true;
        }
    }

}