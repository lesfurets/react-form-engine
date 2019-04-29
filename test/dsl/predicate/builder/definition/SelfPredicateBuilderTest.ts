import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {ReversedPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/ReversedPredicateBuilder";
import {ValuePredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/ValuePredicateBuilder";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {FieldPredicate} from "../../../../../src/dsl/predicate/data/root/FieldPredicate";
import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";

describe("DSL/Predicate/Builder/SelfPredicateBuilder", () => {

    const predicateTarget = new SelfPredicateBuilder();

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
        expect(builtPredicate).toBeInstanceOf(SelfPredicate);
        expect((<FieldPredicate>builtPredicate).predicate).toBe(child);
    });

});