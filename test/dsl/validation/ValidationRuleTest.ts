import {VALID, Validation} from "../../../src/definition/validation/Validation";
import {ValidationEvaluator} from "../../../src/dsl/validation/ValidationEvaluator";
import {ValidationRule} from "../../../src/dsl/validation/ValidationRule";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {Predicates} from "../../../src/dsl/predicate/builder/Predicates";

describe("DSL/Validation/ValidationRule", () => {

    let validation = new Validation(false, "Error");

    let expectValidation= (rule: ValidationRule) => expect(ValidationEvaluator.evaluate({
        id:"fieldId",
        type: FieldTypes.INPUT_TEXT,
        validationRule: rule
    })({}));

    describe("Evaluate", () => {

        it("Should return validation if predicate is verified", () => {
            expectValidation(new ValidationRule(validation, Predicates.true())).toBe(validation);
        });

        it("Should return VALID if predicate is not verified", () => {
            expectValidation(new ValidationRule(validation, Predicates.false())).toBe(VALID);
        });

    });

});