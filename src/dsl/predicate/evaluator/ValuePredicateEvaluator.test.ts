import {FieldTypes} from "../../../definition/FieldTypes";
import {PredicateEvaluator} from "./PredicateEvaluator";
import {SelfPredicate} from "../data/root/SelfPredicate";
import {ValueDefinedPredicate} from "../data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../data/leaf/value/ValueEqualToFieldPredicate";
import {Field} from "../../../definition/model/Field";
import {FieldContext} from "../../../redux/FieldContext";

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