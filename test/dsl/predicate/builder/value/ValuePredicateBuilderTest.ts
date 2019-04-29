import {Field} from "../../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../../src/definition/FieldTypes";
import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {ValueDefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
import {ValueEqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {ValuePredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/ValuePredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/value/StringPredicateBuilder";

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

});