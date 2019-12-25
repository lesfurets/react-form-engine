import {ValueUtils} from "./ValueUtils";

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
            expect(ValueUtils.isDefined("")).toBe(true);
        });

    });

});