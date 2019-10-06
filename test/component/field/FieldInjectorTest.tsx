import {FieldType, FieldTypes} from "../../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../../src/component/field/DefaultFieldInjector";
import {TextField} from "../../../src/component/field/TextField";
import {EmailField} from "../../../src/component/field/EmailField";
import {IntegerField} from "../../../src/component/field/IntegerField";
import {PasswordField} from "../../../src/component/field/PasswordField";
import {CheckboxField} from "../../../src/component/field/CheckboxField";
import {RadioField} from "../../../src/component/field/RadioField";
import {SelectField} from "../../../src/component/field/SelectField";

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

        it("Should display PasswordField on INPUT_SELECT", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_SELECT)).toBe(SelectField);
        });

        it("Should display PasswordField on INPUT_RADIO", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_RADIO)).toBe(RadioField);
        });

        it("Should display PasswordField on INPUT_CHECKBOX", () => {
            expect(FieldInjector.inject(FieldTypes.INPUT_CHECKBOX)).toBe(CheckboxField);
        });

        it("Should display nothing on unknown field", () => {
            expect(FieldInjector.inject(new FieldType("unexpected"))).toBe(UNKNOWN_FIELD);
        });

    });
});