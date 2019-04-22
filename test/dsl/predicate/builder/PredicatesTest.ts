import {Field} from "../../../../src/definition/FormModel";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Predicates} from "../../../../src/dsl/predicate/builder/Predicates";
import {
    FieldPredicateBuilder,
    SelfPredicateBuilder
} from "../../../../src/dsl/predicate/builder/PredicateTargetBuilder";

describe("DSL/Predicate/Builder/Predicates", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    it("Should handle self", () => {
        expect(Predicates.self()).toBeInstanceOf(SelfPredicateBuilder);
    });

    it("Should handle fields", () => {
        let builder = Predicates.field(field);
        expect(builder).toBeInstanceOf(FieldPredicateBuilder);
        expect(builder.field).toBe(field);
    });

});