import React from "react";
import {initTest, mockPredicate} from "../../test-utils";
import {VALID, Validation} from "../../../src/definition/validation/Validation";
import {ValidationRule} from "../../../src/definition/validation/ValidationRule";

initTest();

describe("FormEngine/Definition/ValidationRule", () => {

    let validation = new Validation(false, "Error");

    describe("Evaluate", () => {

        it("Should call predicate", () => {
            // Given
            let predicate = jasmine.createSpy();
            let validationRule = new ValidationRule(validation, mockPredicate(predicate));
            let context = {test: "test"};

            // When
            validationRule.evaluate(context)

            // Then
            expect(predicate).toHaveBeenCalledWith(context);
        });

        it("Should return validation if predicate is verified", () => {
            expect(new ValidationRule(validation, {test: () => true}).evaluate()).toBe(validation);
        });

        it("Should return VALID if predicate is not verified", () => {
            expect(new ValidationRule(validation, {test: () => false}).evaluate()).toBe(VALID);
        });

    });

});