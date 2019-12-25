import {FieldTypes} from "../../../definition/FieldTypes";
import {Predicates} from "./Predicates";
import {FieldPredicateBuilder} from "./definition/FieldPredicateBuilder";
import {SelfPredicateBuilder} from "./definition/SelfPredicateBuilder";
import {TruePredicate} from "../data/root/TruePredicate";
import {FalsePredicate} from "../data/root/FalsePredicate";
import {Field} from "../../../definition/model/Field";

describe("DSL/Predicate/Builder/Predicates", () => {

    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    it("Should handle self", () => {
        expect(Predicates.self).toBeInstanceOf(SelfPredicateBuilder);
    });

    it("Should handle fields", () => {
        let builder = Predicates.field(field);
        expect(builder).toBeInstanceOf(FieldPredicateBuilder);
        expect(builder.field).toBe(field);
    });

    it("Should handle true", () => {
        expect(Predicates.true).toBeInstanceOf(TruePredicate);
    });

    it("Should handle false", () => {
        expect(Predicates.false).toBeInstanceOf(FalsePredicate);
    });

});