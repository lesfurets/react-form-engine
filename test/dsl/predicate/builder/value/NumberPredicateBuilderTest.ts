import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/StringPredicateBuilder";
import {StringEmptyPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringContainPredicate";
import {StringRegExpPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringRegExpPredicate";
import {StringStartWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../../../../src/dsl/predicate/data/leaf/string/StringEndWithPredicate";
import {NumberPredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/NumberPredicateBuilder";
import {NumberPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberPredicate";
import {NumberCheckPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberCheckPredicate";
import {NumberLowerThanPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberLowerThanPredicate";
import {NumberLowerEqualThanPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberGreaterThanPredicate";
import {NumberGreaterEqualThanPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberBetweenPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberBetweenPredicate";
import {NumberEqualToPredicate} from "../../../../../src/dsl/predicate/data/leaf/number/NumberEqualToPredicate";

describe("DSL/Predicate/Builder/StringPredicateBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new NumberPredicateBuilder(parentPredicate);

    it("Should handle equal ", () => {
        // Given
        const value = 10;

        // When
        let predicate = (<SelfPredicate>predicateTest.equalTo(value)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberEqualToPredicate);
        expect((<NumberEqualToPredicate>predicate).value).toBe(value);
    });

    it("Should handle Checking ", () => {
        // Given
        const testValue = () => true;

        // When
        let predicate = (<SelfPredicate>predicateTest.checking(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberCheckPredicate);
        expect((<NumberCheckPredicate>predicate).test).toBe(testValue);
    });

    it("Should handle lowerThan ", () => {
        // Given
        const testValue = 10;

        // When
        let predicate = (<SelfPredicate>predicateTest.lowerThan(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberLowerThanPredicate);
        expect((<NumberLowerThanPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle lowerEqualTo ", () => {
        // Given
        const testValue = 10;

        // When
        let predicate = (<SelfPredicate>predicateTest.lowerOrEqualTo(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberLowerEqualThanPredicate);
        expect((<NumberLowerEqualThanPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle greaterThan ", () => {
        // Given
        const testValue = 10;

        // When
        let predicate = (<SelfPredicate>predicateTest.greaterThan(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberGreaterThanPredicate);
        expect((<NumberGreaterThanPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle greaterEqualTo ", () => {
        // Given
        const testValue = 10;

        // When
        let predicate = (<SelfPredicate>predicateTest.greaterOrEqualTo(testValue)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberGreaterEqualThanPredicate);
        expect((<NumberGreaterEqualThanPredicate>predicate).value).toBe(testValue);
    });

    it("Should handle between ", () => {
        // Given
        const testMin = 10;
        const testMax = 20;

        // When
        let predicate = (<SelfPredicate>predicateTest.between(testMin,testMax)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(NumberBetweenPredicate);
        expect((<NumberBetweenPredicate>predicate).min).toBe(testMin);
        expect((<NumberBetweenPredicate>predicate).max).toBe(testMax);
    });

});