import {TruePredicate} from "../predicate/data/root/TruePredicate";
import {FalsePredicate} from "../predicate/data/root/FalsePredicate";
import {VisibilityRule} from "./VisibilityRule";
import {VisibilityEvaluator} from "./VisibilityEvaluator";
import {FieldTypes} from "../../definition/FieldTypes";

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