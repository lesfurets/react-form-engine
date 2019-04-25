import {Field, FieldContextState} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {PredicateEvaluator} from "../../../src/dsl/predicate/PredicateEvaluator";
import {ReversedPredicate} from "../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {SelfPredicate} from "../../../src/dsl/predicate/data/root/SelfPredicate";
import {FieldPredicate} from "../../../src/dsl/predicate/data/root/FieldPredicate";
import {DefinedPredicate} from "../../../src/dsl/predicate/data/leaf/DefinedPredicate";
import {EqualToPredicate} from "../../../src/dsl/predicate/data/leaf/EqualToPredicate";
import {EqualToFieldPredicate} from "../../../src/dsl/predicate/data/leaf/EqualToFieldPredicate";
import {TruePredicate} from "../../../src/dsl/predicate/data/root/TruePredicate";
import {FalsePredicate} from "../../../src/dsl/predicate/data/root/FalsePredicate";
import {MatchPredicate} from "../../../src/dsl/predicate/data/leaf/MatchPredicate";

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

            let context: FieldContextState = {
                [field.id]: value,
                [secondField.id]: value,
                [thirdField.id]: "otherValue",
            };

            // When
            const predicate = new SelfPredicate(new EqualToPredicate(value));

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

            let context: FieldContextState = {
                [field.id]: value,
                [secondField.id]: value,
                [thirdField.id]: "otherValue",
            };

            // When
            const predicate = new FieldPredicate(field, new EqualToPredicate(value));

            // Then
            expect(PredicateEvaluator.build(field, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(secondField, predicate)(context)).toBe(true);
            expect(PredicateEvaluator.build(thirdField, predicate)(context)).toBe(true);
        });

    });

    describe("ReversedPredicate", () => {
        const value = "value";
        const predicate = new ReversedPredicate(new FieldPredicate(field, new EqualToPredicate(value)));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should return false if inner predicate is true", () => {
            // Given
            let context: FieldContextState = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should return true if inner predicate is false", () => {
            // Given
            let context: FieldContextState = {[field.id]: "value2"};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("DefinedPredicate", () => {
        const predicate = new SelfPredicate(new DefinedPredicate());
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if undefined", () => {
            // Given
            let context: FieldContextState = {};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if null", () => {
            // Given
            const context: FieldContextState = {[field.id]: null};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if empty", () => {
            // Given
            const context: FieldContextState = {[field.id]: ""};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if defined", () => {
            // Given
            const context: FieldContextState = {[field.id]: "value"};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("EqualToPredicate", () => {
        const value = "value";
        const predicate = new SelfPredicate(new EqualToPredicate(value));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if field has different value", () => {
            // Given
            const context: FieldContextState = {[field.id]: "value2"};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if field has expected value", () => {
            // Given
            const context: FieldContextState = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("EqualToFieldPredicate", () => {

        const otherField: Field = {
            id: "otherField",
            type: FieldTypes.INPUT_TEXT,
        };

        const predicate = new SelfPredicate(new EqualToFieldPredicate(otherField));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if fields have different value", () => {
            // Given
            const context: FieldContextState = {
                [field.id]: "value",
                [otherField.id]: "value2",
            };

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if fields have expected value", () => {
            // Given
            const context: FieldContextState = {
                [field.id]: "value",
                [otherField.id]: "value",
            };

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("MatchPredicate", () => {

        it("Should be false", () => {
            // Given
            // const matcher = jasmine.createSpy("matcher", () => false);
            const matcher = jasmine.createSpy().and.returnValue(false);
            const predicate = new MatchPredicate(matcher);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({})).toBe(false);
            expect(matcher).toHaveBeenCalled()
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