import {PredicateEvaluator3} from "../predicate/PredicatesEvaluator3";
import {Field, FieldContextState} from "../../definition/FormModel";

export class VisibilityEvaluator {
    static evaluate(field: Field) {
        return (context: FieldContextState) => {
            let rule = field.visibilityRule;
            if(rule) {
                return PredicateEvaluator3.evaluate(field, rule.predicate)(context) === rule.isVisible;
            }
        }
    }
}