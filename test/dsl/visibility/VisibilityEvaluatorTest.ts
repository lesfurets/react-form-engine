import {TruePredicate} from "../../../src/dsl/predicate/data/root/TruePredicate";
import {FalsePredicate} from "../../../src/dsl/predicate/data/root/FalsePredicate";
import {VisibilityRule} from "../../../src/dsl/visibility/VisibilityRule";
import {VisibilityEvaluator} from "../../../src/dsl/visibility/VisibilityEvaluator";
import {FieldTypes} from "../../../src/definition/FieldTypes";

describe("DSL/Visibility/VisibilityRule", () => {

    let checkEvaluation = (rule: boolean, predicate: boolean, isVisible: boolean) => {
        // Given
        let visibility = new VisibilityRule(rule, predicate ? new TruePredicate() : new FalsePredicate());

        // Then
        expect(VisibilityEvaluator.evaluate({
            id:"fieldId",
            type: FieldTypes.INPUT_TEXT,
            visibilityRule: visibility
        })({})).toBe(isVisible);
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