import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/StringPredicateBuilder";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringRegExpPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import {StringStartWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {StringCheckPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringCheckPredicate";

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
        const testValue = () => true;

        // When
        let predicate = (<SelfPredicate>predicateTest.checking(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringCheckPredicate);
        expect((<StringCheckPredicate>predicate).test).toBe(testValue);
    });

    it("Should handle Containing ", () => {
        // Given
        const testValue = "test";

        // When
        let predicate = (<SelfPredicate>predicateTest.containing(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringContainPredicate);
        expect((<StringContainPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle StartingWith ", () => {
        // Given
        const testValue = "test";

        // When
        let predicate = (<SelfPredicate>predicateTest.startingWith(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringStartWithPredicate);
        expect((<StringStartWithPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle EndingingWith ", () => {
        // Given
        const testValue = "test";

        // When
        let predicate = (<SelfPredicate>predicateTest.endingWith(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringEndWithPredicate);
        expect((<StringEndWithPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle Matching ", () => {
        // Given
        const testRegExp = /.*/;

        // When
        let predicate = (<SelfPredicate>predicateTest.matching(testRegExp)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(StringRegExpPredicate);
        expect((<StringRegExpPredicate>predicate).regExp).toBe(testRegExp);
    });

});