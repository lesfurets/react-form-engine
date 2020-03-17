import {FieldTypes} from "../../../definition/FieldTypes";
import {PredicateEvaluator} from "./PredicateEvaluator";
import {ReversedPredicate} from "../data/operation/ReversedPredicate";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {Field} from "../../../definition/model/Field";
import {FormData} from "../../../redux/FormData";

describe("DSL/Predicate/PredicateEvaluator", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("SelfPredicate", () => {

        it("Should be applied to the current Field", () => {
            // Given
            const value = "value";

            const secondField: Field = {
                id: "secondField",
                type: FieldTypes.INPUT_TEXT,
            };

            const thirdField: Field = {
                id: "thirdField",
                type: FieldTypes.INPUT_TEXT,
            };

            let context: FormData = {
                [field.id]: value,
                [secondField.id]: value,
                [thirdField.id]: "otherValue",
            };

            // When
            const predicate = new SelfPredicate(new StringEqualToPredicate(value));

            // Then
            expect(PredicateEvaluator.build(field, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(secondField, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(thirdField, predicate)(context)).toBe(false);
        });

    });

    describe("FieldPredicate", () => {

        it("Should be applied to the specified Field", () => {
            // Given
            const value = "value";

            const secondField: Field = {
                id: "secondField",
                type: FieldTypes.INPUT_TEXT,
            };

            const thirdField: Field = {
                id: "thirdField",
                type: FieldTypes.INPUT_TEXT,
            };

            let context: FormData = {
                [field.id]: value,
                [secondField.id]: value,
                [thirdField.id]: "otherValue",
            };

            // When
            const predicate = new FieldPredicate(field, new StringEqualToPredicate(value));

            // Then
            expect(PredicateEvaluator.build(field, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(secondField, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(thirdField, predicate)(context)).toBe(true);
        });

    });

    describe("ReversedPredicate", () => {
        const value = "value";
        const predicate = new ReversedPredicate(new FieldPredicate(field, new StringEqualToPredicate(value)));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should return false if inner predicate is true", () => {
            // Given
            let context: FormData = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should return true if inner predicate is false", () => {
            // Given
            let context: FormData = {[field.id]: "value2"};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("TruePredicate", () => {

        it("Should be true", () => {
            // Given
            const predicate = new TruePredicate();

            // Then
            expect(PredicateEvaluator.build(field, predicate)({})).toBe(true);
        });

    });

    describe("FalsePredicate", () => {

        it("Should be false", () => {
            // Given
            const predicate = new FalsePredicate();

            // Then
            expect(PredicateEvaluator.build(field, predicate)({})).toBe(false);
        });

    });

});