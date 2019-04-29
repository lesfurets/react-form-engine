import {Field, FieldContext} from "../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {PredicateEvaluator} from "../../../../src/dsl/predicate/evaluator/PredicateEvaluator";
import {ReversedPredicate} from "../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {SelfPredicate} from "../../../../src/dsl/predicate/data/root/SelfPredicate";
import {FieldPredicate} from "../../../../src/dsl/predicate/data/root/FieldPredicate";
import {ValueDefinedPredicate} from "../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {StringEqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {ValueEqualToFieldPredicate} from "../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {TruePredicate} from "../../../../src/dsl/predicate/data/root/TruePredicate";
import {FalsePredicate} from "../../../../src/dsl/predicate/data/root/FalsePredicate";

describe("DSL/Predicate/ValuePredicateEvaluator", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("ValueDefinedPredicate", () => {
        const predicate = new SelfPredicate(new ValueDefinedPredicate());
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if undefined", () => {
            // Given
            let context: FieldContext = {};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if null", () => {
            // Given
            const context: FieldContext = {[field.id]: null};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be false if empty", () => {
            // Given
            const context: FieldContext = {[field.id]: ""};

            // Then
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if defined", () => {
            // Given
            const context: FieldContext = {[field.id]: "value"};

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

    describe("ValueEqualToFieldPredicate", () => {

        const otherField: Field = {
            id: "otherField",
            type: FieldTypes.INPUT_TEXT,
        };

        const predicate = new SelfPredicate(new ValueEqualToFieldPredicate(otherField));
        const predicateFunction = PredicateEvaluator.build(field, predicate);

        it("Should be false if fields have different value", () => {
            // Given
            const context: FieldContext = {
                [field.id]: "value",
                [otherField.id]: "value2",
            };

            // ThenStringCheckPredicate
            expect(predicateFunction(context)).toBe(false);
        });

        it("Should be true if fields have expected value", () => {
            // Given
            const context: FieldContext = {
                [field.id]: "value",
                [otherField.id]: "value",
            };

            // Then
            expect(predicateFunction(context)).toBe(true);
        });

    });

});