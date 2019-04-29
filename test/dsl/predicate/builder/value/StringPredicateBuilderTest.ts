import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/StringPredicateBuilder";
import {StringCheckPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringCheckPredicate";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";

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

    it("Should handle empty ", () => {
        // Given
        let predicate = (<SelfPredicate>predicateTest.empty()).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringEmptyPredicate);
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