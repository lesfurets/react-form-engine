import {Field, FieldContextState} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {
    DefinedPredicate,
    EqualToFieldPredicate,
    EqualToPredicate
} from "../../../src/dsl/predicate/data/ValuePredicate";
import {FieldPredicate, SelfPredicate} from "../../../src/dsl/predicate/data/PredicateTarget";
import {PredicateEvaluator} from "../../../src/dsl/predicate/PredicateEvaluator";
import {ReversedPredicate} from "../../../src/dsl/predicate/data/ReversedPredicate";

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

});