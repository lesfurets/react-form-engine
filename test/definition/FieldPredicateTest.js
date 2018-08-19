import React from "react";
import {initTest} from "../test-utils";
import {VisibilityBuilder} from "../../src/definition/VisibilityUtils";
import {FieldPredicate} from "../../src/definition/FieldPredicate";

initTest();

describe("FormEngine/Definition/FieldPredicate", () => {

    describe("isDefined", () => {

        let evaluateDefined = (contextValue, expectedResult) => {
            // Given
            let field = {id: "fieldId"};
            let context = contextValue === undefined ? {} : {[field.id]: contextValue};

            // When
            let predicate = FieldPredicate.field(field).isDefined();

            // Then
            expect(predicate(context)).toBe(expectedResult);
        };

        it("Should match if defined", () => {
            evaluateDefined("test", true);
        });

        it("Should not match if undefined", () => {
            evaluateDefined(undefined, false);
        });

        it("Should not match if null", () => {
            evaluateDefined(null, false);
        });

        it("Should not match if empty", () => {
            evaluateDefined("", false);
        });

    });

    describe("isUndefined", () => {

        let evaluateDefined = (contextValue, expectedResult) => {
            // Given
            let field = {id: "fieldId"};
            let context = contextValue === undefined ? {} : {[field.id]: contextValue};

            // When
            let predicate = FieldPredicate.field(field).isUndefined();

            // Then
            expect(predicate(context)).toBe(expectedResult);
        };

        it("Should not match if defined", () => {
            evaluateDefined("test", false);
        });

        it("Should match if undefined", () => {
            evaluateDefined(undefined, true);
        });

        it("Should match if null", () => {
            evaluateDefined(null, true);
        });

        it("Should match if empty", () => {
            evaluateDefined("", true);
        });

    });

});