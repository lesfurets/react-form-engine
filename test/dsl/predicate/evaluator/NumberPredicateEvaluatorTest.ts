import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {PredicateEvaluator} from "../../../../src/dsl/predicate/evaluator/PredicateEvaluator";
import {SelfPredicate} from "../../../../src/dsl/predicate/data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringEndWithPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {StringStartWithPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringRegExpPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import {Field} from "../../../../src/definition/model/Field";
import {FieldContext} from "../../../../src/definition/FieldContext";
import {NumberEqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberEqualToPredicate";
import {NumberCheckPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberCheckPredicate";
import {NumberGreaterEqualThanPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberGreaterThanPredicate";
import {NumberLowerEqualThanPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberLowerThanPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberLowerThanPredicate";
import {NumberBetweenPredicate} from "../../../../src/dsl/predicate/data/leaf/number/NumberBetweenPredicate";

describe("DSL/Predicate/NumberPredicateEvaluator", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("NumberEqualToPredicate", () => {
        const value = 0;
        const predicate = new NumberEqualToPredicate(value);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if field has different value", () => {
            // Given
            const context: FieldContext = {[field.id]: 15};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if field has expected value", () => {
            // Given
            const context: FieldContext = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("NumberCheckPredicate", () => {

        it("Should call specified test with the right param", () => {
            // Given
            const fieldValue = "";
            const matcher = jasmine.createSpy().and.returnValue(false);
            const predicate = new NumberCheckPredicate(matcher);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: fieldValue})).toBe(false);
            expect(matcher).toHaveBeenCalledWith(fieldValue);
        });

    });

    describe("NumberGreaterEqualThanPredicate", () => {
        const value = 10;
        const predicate = new NumberGreaterEqualThanPredicate(value);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if value is lower", () => {
            // Given
            const context: FieldContext = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is equal", () => {
            // Given
            const context: FieldContext = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be true if value is greater", () => {
            // Given
            const context: FieldContext = {[field.id]: value+1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });
    });

    describe("NumberGreaterThanPredicate", () => {
        const value = 10;
        const predicate = new NumberGreaterThanPredicate(value);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if value is lower", () => {
            // Given
            const context: FieldContext = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if value is equal", () => {
            // Given
            const context: FieldContext = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is greater", () => {
            // Given
            const context: FieldContext = {[field.id]: value+1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });
    });

    describe("NumberLowerEqualThanPredicate", () => {
        const value = 10;
        const predicate = new NumberLowerEqualThanPredicate(value);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be true if value is lower", () => {
            // Given
            const context: FieldContext = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be true if value is equal", () => {
            // Given
            const context: FieldContext = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is greater", () => {
            // Given
            const context: FieldContext = {[field.id]: value+1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });
    });

    describe("NumberLowerThanPredicate", () => {
        const value = 10;
        const predicate = new NumberLowerThanPredicate(value);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be true if value is lower", () => {
            // Given
            const context: FieldContext = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is equal", () => {
            // Given
            const context: FieldContext = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if value is greater", () => {
            // Given
            const context: FieldContext = {[field.id]: value+1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });
    });

    describe("NumberBetweenPredicate", () => {
        const min = 10;
        const max = 20;
        const predicate = new NumberBetweenPredicate(min, max);
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if value is lower than min bound", () => {
            // Given
            const context: FieldContext = {[field.id]: min-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is between bounds", () => {
            // Given
            const context: FieldContext = {[field.id]: 15};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is greater than max bound", () => {
            // Given
            const context: FieldContext = {[field.id]: max+1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });
    });



});