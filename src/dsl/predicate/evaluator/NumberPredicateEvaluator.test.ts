import {FieldTypes} from "../../../definition/FieldTypes";
import {PredicateEvaluator} from "./PredicateEvaluator";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {StringEqualToPredicate} from "../data/leaf/string/StringEqualToPredicate";
import {StringCheckPredicate} from "../data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../data/leaf/string/StringContainPredicate";
import {StringEndWithPredicate} from "../data/leaf/string/StringEndWithPredicate";
import {StringStartWithPredicate} from "../data/leaf/string/StringStartWithPredicate";
import {StringRegExpPredicate} from "../data/leaf/string/StringRegExpPredicate";
import {Field} from "../../../definition/model/Field";
import {FormData} from "../../../definition/data/FormData";
import {NumberEqualToPredicate} from "../data/leaf/number/NumberEqualToPredicate";
import {NumberCheckPredicate} from "../data/leaf/number/NumberCheckPredicate";
import {NumberGreaterEqualThanPredicate} from "../data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../data/leaf/number/NumberGreaterThanPredicate";
import {NumberLowerEqualThanPredicate} from "../data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberLowerThanPredicate} from "../data/leaf/number/NumberLowerThanPredicate";
import {NumberBetweenPredicate} from "../data/leaf/number/NumberBetweenPredicate";

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
            const context: FormData = {[field.id]: 15};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if field has expected value", () => {
            // Given
            const context: FormData = {[field.id]: value};

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
            const context: FormData = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is equal", () => {
            // Given
            const context: FormData = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be true if value is greater", () => {
            // Given
            const context: FormData = {[field.id]: value+1};

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
            const context: FormData = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if value is equal", () => {
            // Given
            const context: FormData = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is greater", () => {
            // Given
            const context: FormData = {[field.id]: value+1};

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
            const context: FormData = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be true if value is equal", () => {
            // Given
            const context: FormData = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is greater", () => {
            // Given
            const context: FormData = {[field.id]: value+1};

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
            const context: FormData = {[field.id]: value-1};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is equal", () => {
            // Given
            const context: FormData = {[field.id]: value};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if value is greater", () => {
            // Given
            const context: FormData = {[field.id]: value+1};

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
            const context: FormData = {[field.id]: min-1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if value is between bounds", () => {
            // Given
            const context: FormData = {[field.id]: 15};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

        it("Should be false if value is greater than max bound", () => {
            // Given
            const context: FormData = {[field.id]: max+1};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });
    });



});