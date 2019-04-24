import {Field} from "../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {SelfPredicate} from "../../../../src/dsl/predicate/data/root/SelfPredicate";
import {DefinedPredicate} from "../../../../src/dsl/predicate/data/leaf/DefinedPredicate";
import {EqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/EqualToPredicate";
import {EqualToFieldPredicate} from "../../../../src/dsl/predicate/data/leaf/EqualToFieldPredicate";
import {SelfPredicateBuilder} from "../../../../src/dsl/predicate/builder/definition/SelfPredicateBuilder";
import {ValuePredicateBuilder} from "../../../../src/dsl/predicate/builder/finalizer/ValuePredicateBuilder";

describe("DSL/Predicate/Builder/PredicateTestBuilder", () => {

    const parentPredicate = new SelfPredicateBuilder();
    const predicateTest = new ValuePredicateBuilder(parentPredicate);

    it("Should handle Equal ", () => {
        // Given
        const value = "value";

        // When
        let predicate = (<SelfPredicate>predicateTest.equalTo(value)).predicate;

        // Then
        expect(predicate).toBeInstanceOf(EqualToPredicate);
        expect((<EqualToPredicate>predicate).value).toBe(value);
    });

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


});