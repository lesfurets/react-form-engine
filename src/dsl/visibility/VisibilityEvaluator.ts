import {Field, FieldContextState} from "../../definition/FormModel";
import {PredicateEvaluator} from "../predicate/PredicateEvaluator";

export class VisibilityEvaluator {
    static evaluate(field: Field):(context: FieldContextState)=> boolean {
        return (context: FieldContextState) => {
            let rule = field.visibilityRule;
            return !!(rule && PredicateEvaluator.build(field, rule.predicate)(context) === rule.isVisible);
        }
    }
}