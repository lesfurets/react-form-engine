import {FieldTypes} from "../../../../definition/FieldTypes";
import {SelfPredicate} from "../../data/root/SelfPredicate";
import {ValueDefinedPredicate} from "../../data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../data/leaf/value/ValueEqualToFieldPredicate";
import {SelfPredicateBuilder} from "../definition/SelfPredicateBuilder";
import {ValuePredicateBuilder} from "./ValuePredicateBuilder";
import {StringPredicateBuilder} from "./StringPredicateBuilder";
import {Field} from "../../../../definition/model/Field";
import {NumberPredicateBuilder} from "./NumberPredicateBuilder";

describe("DSL/Predicate/Builder/ValuePredicateBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new ValuePredicateBuilder(parentPredicate);

    it("Should handle EqualToField ", () => {
        //Given
        const field: Field = {
            id: "fieldId",
            type: FieldTypes.INPUT_TEXT,
        };

        // When
        let predicate = (<SelfPredicate>predicateTest.equalToField(field)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(ValueEqualToFieldPredicate);
        expect((<ValueEqualToFieldPredicate>predicate).field).toBe(field);
    });

    it("Should handle Defined ", () => {
        expect((<SelfPredicate>predicateTest.defined()).predicate).toBeInstanceOf(ValueDefinedPredicate);
    });

    it("Should handle aString ", () => {
        expect(predicateTest.aString).toBeInstanceOf(StringPredicateBuilder);
    });

    it("Should handle aNumber ", () => {
        expect(predicateTest.aNumber).toBeInstanceOf(NumberPredicateBuilder);
    });

});