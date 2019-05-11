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

describe("DSL/Predicate/StringPredicateEvaluator", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("StringEqualToPredicate", () => {
        const value = "value";
        const predicate = new SelfPredicate(new StringEqualToPredicate(value));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if field has different value", () => {
            // Given
            const context: FieldContext = {[field.id]: "value2"};

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

    describe("StringCheckPredicate", () => {

        it("Should call specified test with the right param", () => {
            // Given
            const fieldValue = "";
            const matcher = jasmine.createSpy().and.returnValue(false);
            const predicate = new StringCheckPredicate(matcher);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: fieldValue})).toBe(false);
            expect(matcher).toHaveBeenCalledWith(fieldValue);
        });

    });

    describe("StringEmptyPredicate", () => {

        it("Should call be true if empty", () => {
            // Given
            const predicate = new StringEmptyPredicate();

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: ""})).toBe(true);
        });

        it("Should call be false if not empty", () => {
            // Given
            const predicate = new StringEmptyPredicate();

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "NotEmpty"})).toBe(false);
        });

    });

    describe("StringContainsPredicate", () => {

        it("Should call be true if value is contained", () => {
            // Given
            const testValue = "test";
            const predicate = new StringContainPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "this is a test value"})).toBe(true);
        });

        it("Should call be false if value is not contained", () => {
            const testValue = "test";
            const predicate = new StringContainPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "azer"})).toBe(false);
        });

    });

    describe("StringStartWithPredicate", () => {

        it("Should call be true if value is at the beginning", () => {
            // Given
            const testValue = "test";
            const predicate = new StringStartWithPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "test value"})).toBe(true);
        });

        it("Should call be false if value is not at the beginning", () => {
            const testValue = "test";
            const predicate = new StringStartWithPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "this is a test"})).toBe(false);
        });

    });

    describe("StringEndWithPredicate", () => {

        it("Should call be true if value is at the end", () => {
            // Given
            const testValue = "test";
            const predicate = new StringEndWithPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "this is a test"})).toBe(true);
        });

        it("Should call be false if value is not at the end", () => {
            const testValue = "test";
            const predicate = new StringEndWithPredicate(testValue);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "test value"})).toBe(false);
        });

    });

    describe("StringEndWithPredicate", () => {

        it("Should call be true if value is matching regexp", () => {
            // Given
            const testRegExp = /.*test.*/;
            const predicate = new StringRegExpPredicate(testRegExp);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "this is a test"})).toBe(true);
        });

        it("Should call be false if value is not matching regexp", () => {
            const testRegExp = /.*test.*/;
            const predicate = new StringRegExpPredicate(testRegExp);

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "tet value"})).toBe(false);
        });

    });

});