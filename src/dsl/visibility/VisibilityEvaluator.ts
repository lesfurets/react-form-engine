import {PredicateEvaluator} from "../predicate/PredicatesEvaluator";
import {Field, FieldContextState} from "../../definition/FormModel";

export class VisibilityEvaluator {
    static evaluate(field: Field) {
        return (context: FieldContextState) => {
            let rule = field.visibilityRule;
            if(rule) {
                return PredicateEvaluator.evaluate(field, rule.predicate)(context) === rule.isVisible;
            }
        }
    }
}