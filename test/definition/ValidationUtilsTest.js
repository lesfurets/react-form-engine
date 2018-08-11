import React from "react";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {Validation, VALID} from "../../src/definition/Validation";
import {ValidationUtils} from "../../src/definition/ValidationUtils";

configure({adapter: new Adapter()});

describe("FormEngine/Definition/ValidationUtils", () => {

    let field = {id: "fieldId"};
    let errorMessage = "errorMessage";

    describe("isNullOrUndefined", () => {

        it("Should be true with no values", () => {
            expect(ValidationUtils.isNullOrUndefined()).toBe(true);
        });

        it("Should be true if undefined", () => {
            expect(ValidationUtils.isNullOrUndefined(undefined)).toBe(true);
        });

        it("Should be true if null", () => {
            expect(ValidationUtils.isNullOrUndefined(null)).toBe(true);
        });

        it("Should be true if empty", () => {
            expect(ValidationUtils.isNullOrUndefined("")).toBe(true);
        });

        it("Should be true if 'UNDEFINED'", () => {
            expect(ValidationUtils.isNullOrUndefined("UNDEFINED")).toBe(true);
        });

        it("Should be false if string", () => {
            expect(ValidationUtils.isNullOrUndefined("test")).toBe(false);
        });

        it("Should be false if number", () => {
            expect(ValidationUtils.isNullOrUndefined(20)).toBe(false);
        });

    });

    describe("isDefined", () => {
        let fieldValue = "fieldValue";

        it("Should be VALID if value is in context", () => {
            expect(ValidationUtils.isDefined(field, {[field.id]: fieldValue}, errorMessage)).toBe(VALID);
        });

        it("Should be ERROR if value is not defined", () => {
            let validation = ValidationUtils.isDefined(field, {}, errorMessage);
            expect(validation.isValid).toBe(false);
            expect(validation.message).toBe(errorMessage);
        });

    });

    describe("isDefinedAndEqualTo", () => {
        let goodValue = "goodValue";

        it("Should be VALID if good value is in context", () => {
            expect(ValidationUtils.isDefinedAndEqualTo(field, {[field.id]: goodValue}, goodValue, errorMessage)).toBe(VALID);
        });

        it("Should be ERROR if wrong value is not defined", () => {
            let validation = ValidationUtils.isDefinedAndEqualTo(field, {[field.id]: "wrongValue"}, goodValue, errorMessage);
            expect(validation.isValid).toBe(false);
            expect(validation.message).toBe(errorMessage);
        });

        it("Should be ERROR if value is not defined", () => {
            let validation = ValidationUtils.isDefinedAndEqualTo(field, {}, goodValue, errorMessage);
            expect(validation.isValid).toBe(false);
            expect(validation.message).toBe(errorMessage);
        });

    });


});