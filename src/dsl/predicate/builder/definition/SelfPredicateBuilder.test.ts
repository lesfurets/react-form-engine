import {SelfPredicateBuilder} from "./SelfPredicateBuilder";
import {ReversedPredicateBuilder} from "./ReversedPredicateBuilder";
import {ValuePredicateBuilder} from "../value/ValuePredicateBuilder";
import {Predicate} from "../../data/Predicate";
import {FieldPredicate} from "../../data/root/FieldPredicate";
import {SelfPredicate} from "../../data/root/SelfPredicate";

describe("DSL/Predicate/Builder/SelfPredicateBuilder", () => {

    const predicateTarget = new SelfPredicateBuilder();

    it("Should handle is", () => {
        let valuePredicateBuilder = predicateTarget.is;
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        expect(valuePredicateBuilder.parent).toBe(predicateTarget);
    });

    it("Should handle isNot", () => {
        let valuePredicateBuilder = predicateTarget.isNot;
        expect(valuePredicateBuilder).toBeInstanceOf(ValuePredicateBuilder);
        let parentPredicate = valuePredicateBuilder.parent;
        expect(parentPredicate).toBeInstanceOf(ReversedPredicateBuilder);
        expect((<ReversedPredicateBuilder>parentPredicate).parent).toBe(predicateTarget);
    });

    it("Should handle build", () => {
        // Given
        let child = new Predicate();

        // When
        let builtPredicate = predicateTarget.build(child);

        // Then
        expect(builtPredicate).toBeInstanceOf(SelfPredicate);
        expect((<FieldPredicate>builtPredicate).predicate).toBe(child);
    });

});