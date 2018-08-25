import React from "react";
import {initTest} from "../../test-utils";
import {FieldPredicate} from "../../../src/definition/predicate/FieldPredicate";

initTest();

describe("FormEngine/Definition/Predicate/FieldPredicate", () => {

    let fieldId = "fieldId";

    let getContext = (contextValue) => ({[fieldId]: contextValue});
    let getPredicate = () => new FieldPredicate(fieldId);
    let expectPredicate = (predicate, value) => expect(predicate.testAzer(getContext(value)));

    describe("Not", () => {

        it("Should invert test ok", () => {
            let predicate = getPredicate().isNot();
            predicate._testByType = () => true;
            expect(predicate.test()).toBe(false);
        });

        it("Should invert test ko", () => {
            let predicate = getPredicate().isNot();
            predicate._testByType = () => false;
            expect(predicate.test()).toBe(true);
        });

    });

    describe("Default", () => {

        it("Should be valid by default", () => {
            expect(getPredicate().test()).toBe(true);
        });

    });

    describe("Defined", () => {

        it("Should match if defined", () => {
            expectPredicate(getPredicate().is().defined(),"test").toBe(true);
        });

        it("Should not match if null", () => {
            expectPredicate(getPredicate().is().defined(),null).toBe(false);
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