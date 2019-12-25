import {SelfPredicate} from "../../data/root/SelfPredicate";
import {StringEqualToPredicate} from "../../data/leaf/string/StringEqualToPredicate";
import {SelfPredicateBuilder} from "../definition/SelfPredicateBuilder";
import {StringPredicateBuilder} from "./StringPredicateBuilder";
import {StringEmptyPredicate} from "../../data/leaf/string/StringEmptyPredicate";
import {StringContainPredicate} from "../../data/leaf/string/StringContainPredicate";
import {StringRegExpPredicate} from "../../data/leaf/string/StringRegExpPredicate";
import {StringStartWithPredicate} from "../../data/leaf/string/StringStartWithPredicate";
import {StringEndWithPredicate} from "../../data/leaf/string/StringEndWithPredicate";
import {NumberPredicateBuilder} from "./NumberPredicateBuilder";
import {NumberPredicate} from "../../data/leaf/number/NumberPredicate";
import {NumberCheckPredicate} from "../../data/leaf/number/NumberCheckPredicate";
import {NumberLowerThanPredicate} from "../../data/leaf/number/NumberLowerThanPredicate";
import {NumberLowerEqualThanPredicate} from "../../data/leaf/number/NumberLowerEqualThanPredicate";
import {NumberGreaterThanPredicate} from "../../data/leaf/number/NumberGreaterThanPredicate";
import {NumberGreaterEqualThanPredicate} from "../../data/leaf/number/NumberGreaterEqualThanPredicate";
import {NumberBetweenPredicate} from "../../data/leaf/number/NumberBetweenPredicate";
import {NumberEqualToPredicate} from "../../data/leaf/number/NumberEqualToPredicate";

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