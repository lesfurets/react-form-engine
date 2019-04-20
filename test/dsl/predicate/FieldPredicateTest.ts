// import {initTest} from "../../test-utils";
import {PredicateEvaluator3} from "../../../src/dsl/predicate/PredicatesEvaluator3";
import {FieldPredicate2} from "../../../src/dsl/predicate/FieldPredicate";
import {Field, FieldContextState} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";

// initTest();

describe("FormEngine/Definition/Predicate/FieldPredicate2", () => {

    let fieldId: string = "fieldId";
    let field: Field = {
        id: fieldId,
        type: FieldTypes.INPUT_TEXT,
    };

    let getContext: (contextValue:string | undefined) => FieldContextState = (contextValue: string) => ({[fieldId]: contextValue});
    let getPredicate: () => FieldPredicate2 = () => new FieldPredicate2(fieldId);
    let expectPredicate = (predicate: FieldPredicate2, value?:string | undefined) => expect(PredicateEvaluator3.evaluate(field, predicate)(getContext(value)));

    describe("Not", () => {

        it("Should invert test ok", () => {
            expectPredicate(getPredicate().isNot()).toBe(false);
        });

    });

    describe("Default", () => {

        it("Should be valid by default", () => {
            expectPredicate(getPredicate()).toBe(true);
        });

    });

    describe("Defined", () => {

        it("Should match if defined", () => {
            expectPredicate(getPredicate().is().defined(),"test").toBe(true);
        });

        it("Should not match if null", () => {
            expectPredicate(getPredicate().is().defined(),undefined).toBe(false);
        });

    });

    describe("EqualTo", () => {

        it("Should match if equal", () => {
            let value = "testValue";
            expectPredicate(getPredicate().is().equalTo(value),value).toBe(true);
        });

        it("Should not match if different", () => {
            expectPredicate(getPredicate().is().equalTo("testValue1"),"testValue2").toBe(false);
        });

    });

    describe("EqualToField", () => {

        let otherId = "otherId";

        it("Should match if equal", () => {
            let value = "testValue";
            let context = {
                [fieldId]: value,
                [otherId]: value
            };
            expect(getPredicate().is().equalToField(otherId).test(context)).toBe(true);
        });

        it("Should not match if different", () => {
            let context = {
                [fieldId]: "testValue1",
                [otherId]: "testValue2"
            };
            expect(getPredicate().is().equalToField(otherId).test(context)).toBe(false);
        });

    });

});