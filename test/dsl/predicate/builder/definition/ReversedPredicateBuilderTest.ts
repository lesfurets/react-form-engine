import {ReversedPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/ReversedPredicateBuilder";
import {PredicateDefinitionBuilder} from "../../../../../src/dsl/predicate/builder/definition/PredicateDefinitionBuilder";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {ReversedPredicate} from "../../../../../src/dsl/predicate/data/operation/ReversedPredicate";

describe("DSL/Predicate/Builder/PredicateTargetBuilder", () => {

    class TestPredicate extends Predicate{
        child: Predicate;


        constructor(child: Predicate) {
            super();
            this.child = child;
        }
    }

    const parent:PredicateDefinitionBuilder = {
        build(child: Predicate) {
            return new TestPredicate(child);
        }
    };

    const predicateTarget = new ReversedPredicateBuilder(parent);

    it("Should handle have right parent", () => {
        expect(predicateTarget.parent).toBe(parent);
    });

    it("Should handle build", () => {
        // Given
        let child = new Predicate();

        // When
        let builtPredicate = predicateTarget.build(child);

        // Then
        expect(builtPredicate).toBeInstanceOf(ReversedPredicate);

        let firstChild = (<ReversedPredicate>builtPredicate).child;
        expect(firstChild).toBeInstanceOf(TestPredicate);

        let secondChild = (<TestPredicate>firstChild).child;
        expect(secondChild).toBe(child);
    });

});