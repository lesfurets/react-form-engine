import {ReversedPredicateBuilder} from "./ReversedPredicateBuilder";
import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {ReversedPredicate} from "../../data/operation/ReversedPredicate";

describe("DSL/Predicate/Builder/ReversedPredicateBuilder", () => {

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
        expect(builtPredicate).toBeInstanceOf(TestPredicate);

        let firstChild = (<TestPredicate>builtPredicate).child;
        expect(firstChild).toBeInstanceOf(ReversedPredicate);

        let secondChild = (<ReversedPredicate>firstChild).child;
        expect(secondChild).toBe(child);
    });

});