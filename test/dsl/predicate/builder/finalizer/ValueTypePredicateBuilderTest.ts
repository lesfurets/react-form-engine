import {Field} from "../../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../../src/definition/FieldTypes";
import {SelfPredicate} from "../../../../../src/dsl/predicate/data/root/SelfPredicate";
import {DefinedPredicate} from "../../../../../src/dsl/predicate/data/leaf/DefinedPredicate";
import {EqualToFieldPredicate} from "../../../../../src/dsl/predicate/data/leaf/EqualToFieldPredicate";
import {SelfPredicateBuilder} from "../../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {ValueTypePredicateBuilder} from "../../../../../src/dsl/predicate/builder/finalizer/ValueTypePredicateBuilder";
import {StringPredicateBuilder} from "../../../../../src/dsl/predicate/builder/finalizer/StringPredicateBuilder";

describe("DSL/Predicate/Builder/ValueTypePredicateBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new ValueTypePredicateBuilder(parentPredicate);

    it("Should handle EqualToField ", () => {
        //Given
        const field: Field = {
            id: "fieldId",
            type: FieldTypes.INPUT_TEXT,
        };

        // When
        let predicate = (<SelfPredicate>predicateTest.equalToField(field)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(EqualToFieldPredicate);
        expect((<EqualToFieldPredicate>predicate).field).toBe(field);
    });

    it("Should handle Defined ", () => {
        expect((<SelfPredicate>predicateTest.defined()).predicate).toBeInstanceOf(DefinedPredicate);
    });

    it("Should handle aString ", () => {
        expect(predicateTest.aString).toBeInstanceOf(StringPredicateBuilder);
    });

});