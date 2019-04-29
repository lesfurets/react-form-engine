import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {EqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/EqualToPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/finalizer/StringPredicateBuilder";

describe("DSL/Predicate/Builder/StringPredicateBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new StringPredicateBuilder(parentPredicate);

    it("Should handle Equal ", () => {
        // Given
        const value = "value";

        // When
        let predicate = (<SelfPredicate>predicateTest.equalTo(value)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(EqualToPredicate);
        expect((<EqualToPredicate>predicate).value).toBe(value);
    });

});