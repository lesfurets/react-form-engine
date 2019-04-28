import {ReversedPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/ReversedPredicateBuilder";
import {ValuePredicateBuilder} from "../../../../../src/dsl/predicate/builder/finalizer/ValuePredicateBuilder";
import {Field} from "../../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../../src/definition/FieldTypes";
import {FieldPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/FieldPredicateBuilder";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {FieldPredicate} from "../../../../../src/dsl/predicate/data/root/FieldPredicate";

describe("DSL/Predicate/Builder/FieldPredicateBuilder", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };
    const predicateTarget = new FieldPredicateBuilder(field);

    it("Should handle is", () => {
        let valuePredicateBuilder = predicateTarget.is;
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        expect(valuePredicateBuilder.parent).toBe(predicateTarget);
    });

    it("Should handle isNot", () => {
        let valuePredicateBuilder = predicateTarget.isNot;
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        let parentPredicate = valuePredicateBuilder.parent;
        expect(parentPredicate).toBeInstanceOf(ReversedPredicateBuilder);
        expect((<ReversedPredicateBuilder>parentPredicate).parent).toBe(predicateTarget);
    });

    it("Should handle build", () => {
        // Given
        let child = new Predicate();

        // When
        let builtPredicate = predicateTarget.build(child);

        // Then
        expect(builtPredicate).toBeInstanceOf(FieldPredicate);
        expect((<FieldPredicate>builtPredicate).predicate).toBe(child);
        expect((<FieldPredicate>builtPredicate).field).toBe(field);
    });

});