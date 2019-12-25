import {VALID, Validation} from "../../definition/validation/Validation";
import {ValidationEvaluator} from "./ValidationEvaluator";
import {ValidationRule} from "./ValidationRule";
import {Predicates} from "../predicate/builder/Predicates";
import {FieldTypes} from "../../definition/FieldTypes";

describe("DSL/Validation/ValidationRule", () => {

    let validation = new Validation(false, "Error");

    let expectValidation= (rule: ValidationRule) => expect(ValidationEvaluator.evaluate({
        id:"fieldId",
        type: FieldTypes.INPUT_TEXT,
        validationRule: rule
    })({}));

    describe("Evaluate", () => {

        it("Should return validation if predicate is verified", () => {
            expectValidation(new ValidationRule(validation, Predicates.true)).toBe(validation);
        });

        it("Should return VALID if predicate is not verified", () => {
            expectValidation(new ValidationRule(validation, Predicates.false)).toBe(VALID);
        });

    });

});