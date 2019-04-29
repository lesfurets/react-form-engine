import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/StringEqualToPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/finalizer/StringPredicateBuilder";
import {StringCheckPredicate} from "../../../../../src/dsl/predicate/data/leaf/StringCheckPredicate";

describe("DSL/Predicate/Builder/StringPredicateBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new StringPredicateBuilder(parentPredicate);

    it("Should handle Equal ", () => {
        // Given
        const value = "value";

        // When
        let predicate = (<SelfPredicate>predicateTest.equalTo(value)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringEqualToPredicate);
        expect((<StringEqualToPredicate>predicate).value).toBe(value);
    });

    it("Should handle Checking ", () => {
        // Given
        const test = () => false;

        // When
        let predicate = (<SelfPredicate>predicateTest.checking(test)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringCheckPredicate);
        expect((<StringCheckPredicate>predicate).test).toBe(test);
    });

});