import React from "react";
import {initTest} from "../test-utils";
import {Visibility} from "../../src/definition/Visibility";

initTest();

describe("FormEngine/Definition/Visibility", () => {

    describe("Evaluate", () => {

        it("Should call predicate", () => {
            // Given
            let isVisible = false;
            let predicate = jasmine.createSpy();
            let visibility = new Visibility(isVisible, predicate);
            let context = {test: "test"};

            // When
            visibility.evaluate(context)

            // Then
            expect(predicate).toHaveBeenCalledWith(context);
        });

        let checkEvaluation = (rule, predicate, isVisible) => {
            // Given
            let visibility = new Visibility(rule, () => predicate);

            // Then
            expect(visibility.evaluate()).toBe(isVisible);
        };

        it("Should be visible if rule implies visible and predicate is verified", () => {
            checkEvaluation(true, true, true);
        });

        it("Should not be visible if rule implies visible and predicate is not verified", () => {
            checkEvaluation(true, false, false);
        });

        it("Should not be visible if rule implies invisible and predicate is verified", () => {
            checkEvaluation(false, true, false);
        });

        it("Should be visible if rule implies invisible and predicate is not verified", () => {
            checkEvaluation(false, false, true);
        });

    });

});