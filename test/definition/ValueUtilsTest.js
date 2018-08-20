import React from "react";
import {initTest} from "../test-utils";
import {VisibilityBuilder} from "../../src/definition/VisibilityUtils";
import {FieldPredicate} from "../../src/definition/FieldPredicate";
import {ValueUtils} from "../../src/definition/ValueUtils";

initTest();

describe("FormEngine/Definition/ValueUtils", () => {

    describe("isDefined", () => {

        it("Should match if defined", () => {
            expect(ValueUtils.isDefined("test")).toBe(true);
        });

        it("Should not match if undefined", () => {
            expect(ValueUtils.isDefined(undefined)).toBe(false);
        });

        it("Should not match if null", () => {
            expect(ValueUtils.isDefined(null)).toBe(false);
        });

        it("Should not match if empty", () => {
            expect(ValueUtils.isDefined("")).toBe(false);
        });

    });

});