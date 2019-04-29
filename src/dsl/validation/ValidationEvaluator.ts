import {VALID} from "../../definition/validation/Validation";
import {Field, FieldContext} from "../../definition/FormModel";
import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";

export class ValidationEvaluator {
    static evaluate(field: Field) {
        return (context: FieldContext) => {
            let rule = field.validationRule;
            return rule && PredicateEvaluator.build(field, rule.predicate)(context) ? rule.validation : VALID;
        }
    }
}