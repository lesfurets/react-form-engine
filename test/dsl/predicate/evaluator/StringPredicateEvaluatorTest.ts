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
import {StringCheckPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";

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

        it("Should call be true if empty", () => {
            // Given
            const predicate = new StringEmptyPredicate();

            // Then
            expect(PredicateEvaluator.build(field, predicate)({[field.id]: "NotEmpty"})).toBe(false);
        });

    });

});