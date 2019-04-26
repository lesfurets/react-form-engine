import {Field, FieldContext} from "../../definition/FormModel";
import {PredicateEvaluator} from "../predicate/PredicateEvaluator";

export class VisibilityEvaluator {
    static evaluate(field: Field):(context: FieldContext)=> boolean {
        return (context: FieldContext) => {
            let rule = field.visibilityRule;
            return (rule !== undefined) && (PredicateEvaluator.build(field, rule.predicate)(context) === rule.isVisible);
        }
    }
}