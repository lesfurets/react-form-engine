import {FieldTypes} from "../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../src/definition/FieldInjector";
import {TextField} from "../../src/component/field/TextField";
import {EmailField} from "../../src/component/field/EmailField";
import {NumberField} from "../../src/component/field/NumberField";
import {PasswordField} from "../../src/component/field/PasswordField";

describe("FormEngine/Definition/FieldInjector", () => {

    describe("Mapping", () => {

        it("Should display TextField on INPUT_TEXT", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_TEXT)).toBe(TextField);
        });

        it("Should display EmailField on INPUT_EMAIL", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_EMAIL)).toBe(EmailField);
        });

        it("Should display NumberField on INPUT_NUMBER", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_NUMBER)).toBe(NumberField);
        });

        it("Should display PasswordField on INPUT_PASSWORD", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_PASSWORD)).toBe(PasswordField);
        });

        it("Should display nothing on unknown field", () => {
            expect(FieldInjector.inject("unexpected")).toBe(UNKNOWN_FIELD);
        });

    });
});