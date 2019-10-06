import {FieldType, FieldTypes} from "../../../../src/definition/FieldTypes";
import {TextField} from "../../../../src/theme/component/field/TextField";
import {EmailField} from "../../../../src/theme/component/field/EmailField";
import {IntegerField} from "../../../../src/theme/component/field/IntegerField";
import {PasswordField} from "../../../../src/theme/component/field/PasswordField";
import {CheckboxField} from "../../../../src/theme/component/field/CheckboxField";
import {RadioField} from "../../../../src/theme/component/field/RadioField";
import {SelectField} from "../../../../src/theme/component/field/SelectField";
import {DefaultFieldInjector, UNKNOWN_FIELD} from "../../../../src/theme/component/field/DefaultFieldInjector";

describe("FormEngine/Definition/DefaultFieldInjector", () => {

    describe("Mapping", () => {

        it("Should display TextField on INPUT_TEXT", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_TEXT)).toBe(TextField);
        });

        it("Should display EmailField on INPUT_EMAIL", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_EMAIL)).toBe(EmailField);
        });

        it("Should display IntegerField on INPUT_INTEGER", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_INTEGER)).toBe(IntegerField);
        });

        it("Should display PasswordField on INPUT_PASSWORD", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_PASSWORD)).toBe(PasswordField);
        });

        it("Should display PasswordField on INPUT_SELECT", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_SELECT)).toBe(SelectField);
        });

        it("Should display PasswordField on INPUT_RADIO", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_RADIO)).toBe(RadioField);
        });

        it("Should display PasswordField on INPUT_CHECKBOX", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_CHECKBOX)).toBe(CheckboxField);
        });

        it("Should display nothing on unknown field", () => {
            expect(DefaultFieldInjector.inject(new FieldType("unexpected"))).toBe(UNKNOWN_FIELD);
        });

    });
});