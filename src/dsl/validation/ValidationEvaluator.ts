import {VALID} from "../../definition/validation/Validation";
import {PredicateEvaluator} from "../predicate/evaluator/PredicateEvaluator";
import {Field} from "../../definition/model/Field";
import {FormData} from "../../redux/FormData";
import {DSLField} from "../DSLField";

export class ValidationEvaluator {
    static evaluate(field: DSLField<Field>) {
        return (context: FormData) => {
            let rule = field.validationRule;
            return rule && PredicateEvaluator.build(field, rule.predicate)(context) ? rule.validation : VALID;
        }
    }
}