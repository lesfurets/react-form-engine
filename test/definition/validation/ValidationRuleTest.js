import React from "react";
import {initTest, mockPredicate} from "../../test-utils";
import {VALID, Validation} from "../../../src/definition/validation/Validation";
import {ValidationRule} from "../../../src/definition/validation/ValidationRule";
import {ValidationEvaluator} from "../../../src/definition/validation/ValidationEvaluator";

initTest();

describe("FormEngine/Definition/Validation/ValidationRule", () => {

    let validation = new Validation(false, "Error");

    let expectValidation= (validation) => expect(ValidationEvaluator.evaluate({validationRule: validation})());

    describe("Evaluate", () => {

        it("Should return validation if predicate is verified", () => {
            expectValidation(new ValidationRule(validation, mockPredicate(true))).toBe(validation);
        });

        it("Should return VALID if predicate is not verified", () => {
            expectValidation(new ValidationRule(validation, mockPredicate(false))).toBe(VALID);
        });

    });

});