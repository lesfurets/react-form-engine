import {Field, FieldContext} from "../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {PredicateEvaluator} from "../../../../src/dsl/predicate/evaluator/PredicateEvaluator";
import {ReversedPredicate} from "../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {SelfPredicate} from "../../../../src/dsl/predicate/data/root/SelfPredicate";
import {FieldPredicate} from "../../../../src/dsl/predicate/data/root/FieldPredicate";
import {DefinedPredicate} from "../../../../src/dsl/predicate/data/leaf/DefinedPredicate";
import {StringEqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/StringEqualToPredicate";
import {EqualToFieldPredicate} from "../../../../src/dsl/predicate/data/leaf/EqualToFieldPredicate";
import {TruePredicate} from "../../../../src/dsl/predicate/data/root/TruePredicate";
import {FalsePredicate} from "../../../../src/dsl/predicate/data/root/FalsePredicate";

describe("DSL/Predicate/ValuePredicateEvaluator", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("DefinedPredicate", () => {
        const predicate = new SelfPredicate(new DefinedPredicate());
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

    describe("EqualToFieldPredicate", () => {

        const otherField: Field = {
            id: "otherField",
            type: FieldTypes.INPUT_TEXT,
        };

        const predicate = new SelfPredicate(new EqualToFieldPredicate(otherField));
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