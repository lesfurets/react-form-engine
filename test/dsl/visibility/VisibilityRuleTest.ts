import React from "react";
import {initTest, mockPredicate} from "../../test-utils";
import {VisibilityRule} from "../../../src/definition/visibility/VisibilityRule";
import {VisibilityEvaluator} from "../../../src/definition/visibility/VisibilityEvaluator";

initTest();

describe("FormEngine/Definition/Visibility/VisibilityRule", () => {

    describe("Evaluate", () => {

        let checkEvaluation = (rule, predicate, isVisible) => {
            // Given
            let visibility = new VisibilityRule(rule, mockPredicate(predicate));

            // Then
            expect(VisibilityEvaluator.evaluate({visibilityRule: visibility})()).toBe(isVisible);
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