import React from "react";
import {VALID, Validation} from "../../../src/definition/validation/Validation";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Definition/Validation/Validation", () => {

    describe("Structure", () => {
        let valid = false;
        let message = "error";
        let validation = new Validation(valid, message);
        it("Should have isValid", () => {
            expect(validation.isValid).not.toBe(null);
            expect(typeof validation.isValid).toBe("boolean");
            expect(validation.isValid).toBe(false);
        });

        it("Should have label", () => {
            expect(validation.message).not.toBe(null);
            expect(typeof validation.message).toBe("string");
            expect(validation.message).toBe(message);
        });
    });

    describe("VALID", () => {
        it("Should be valid", () => {
            expect(VALID.isValid).toBe(true);
        });

        it("Should have no label", () => {
            expect(VALID.message).toBe("");
        });
    });


});