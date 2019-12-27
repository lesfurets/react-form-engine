import {VALID} from "../../definition/validation/Validation";
import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";
import {Field} from "../../definition/model/Field";
import {FieldContext} from "../../redux/FieldContext";
import {DSLField} from "../DSLField";

export class ValidationEvaluator {
    static evaluate(field: DSLField<Field>) {
        return (context: FieldContext) => {
            let rule = field.validationRule;
            return rule && PredicateEvaluator.build(field, rule.predicate)(context) ? rule.validation : VALID;
        }
    }
}