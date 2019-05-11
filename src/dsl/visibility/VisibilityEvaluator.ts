import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";
import {Field} from "../../definition/model/Field";
import {FieldContext} from "../../definition/FieldContext";

export class VisibilityEvaluator {
    static evaluate(field: Field):(context: FieldContext)=> boolean {
        return (context: FieldContext) => {
            let rule = field.visibilityRule;
            return (rule !== undefined) && (PredicateEvaluator.build(field, rule.predicate)(context) === rule.isVisible);
        }
    }
}