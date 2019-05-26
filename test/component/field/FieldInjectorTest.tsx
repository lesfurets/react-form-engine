import {FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../../src/component/field/FieldInjector";
import {TextField} from "../../../src/component/field/TextField";
import {EmailField} from "../../../src/component/field/EmailField";
import {IntegerField} from "../../../src/component/field/IntegerField";
import {PasswordField} from "../../../src/component/field/PasswordField";

describe("FormEngine/Definition/FieldInjector", () => {

    describe("Mapping", () => {

        it("Should display TextField on INPUT_TEXT", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_TEXT)).toBe(TextField);
        });

        it("Should display EmailField on INPUT_EMAIL", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_EMAIL)).toBe(EmailField);
        });

        it("Should display IntegerField on INPUT_INTEGER", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_INTEGER)).toBe(IntegerField);
        });

        it("Should display PasswordField on INPUT_PASSWORD", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_PASSWORD)).toBe(PasswordField);
        });

        it("Should display nothing on unknown field", () => {
            expect(FieldInjector.inject("unexpected")).toBe(UNKNOWN_FIELD);
        });

    });
});