import {SelfPredicateBuilder} from "../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {ReversedPredicatedBuilder} from "../../../../src/dsl/predicate/builder/definition/ReversedPredicatedBuilder";
import {ValuePredicateBuilder} from "../../../../src/dsl/predicate/builder/finalizer/ValuePredicateBuilder";

describe("DSL/Predicate/Builder/PredicateTargetBuilder", () => {

    const predicateTarget = new SelfPredicateBuilder();

    it("Should handle is", () => {
        let valuePredicateBuilder = predicateTarget.is();
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        expect(valuePredicateBuilder.parent).toBe(predicateTarget);
    });

    it("Should handle isNot", () => {
        let valuePredicateBuilder = predicateTarget.isNot();
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        let parentPredicate = valuePredicateBuilder.parent;
        expect(parentPredicate).toBeInstanceOf(ReversedPredicatedBuilder);
        expect((<ReversedPredicatedBuilder>parentPredicate).parent).toBe(predicateTarget);
    });

});