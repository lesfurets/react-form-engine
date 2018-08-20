import React from "react";
import {initTest} from "../test-utils";
import {VisibilityBuilder} from "../../src/definition/VisibilityUtils";
import {FieldPredicate} from "../../src/definition/FieldPredicate";

initTest();

describe("FormEngine/Definition/Predicate/FieldPredicate", () => {

    describe("isDefined", () => {

        let evaluateDefined = (contextValue, expectedResult) => {
            // Given
            let fieldId = "fieldId";
            let context = contextValue === undefined ? {} : {[fieldId]: contextValue};

            // When
            let predicate = new FieldPredicate(fieldId).isDefined();

            // Then
            expect(predicate.evaluate(context)).toBe(expectedResult);
        };

        it("Should match if defined", () => {
            evaluateDefined("test", true);
        });

        it("Should not match if null", () => {
            evaluateDefined(null, false);
        });

    });

    describe("isUndefined", () => {

        let evaluateDefined = (contextValue, expectedResult) => {
            // Given
            let fieldId = "fieldId";
            let context = contextValue === undefined ? {} : {[fieldId]: contextValue};

            // When
            let predicate = new FieldPredicate(fieldId).isUndefined();

            // Then
            expect(predicate.evaluate(context)).toBe(expectedResult);
        };

        it("Should not match if defined", () => {
            evaluateDefined("test", false);
        });

        it("Should match if null", () => {
            evaluateDefined(null, true);
        });

    });

});