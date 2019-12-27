import {FieldType, FieldTypes} from "../../definition/FieldTypes";
import {TextFieldComponent} from "./text/TextFieldComponent";
import {EmailFieldComponent} from "./email/EmailFieldComponent";
import {IntegerFieldComponent} from "./integer/IntegerFieldComponent";
import {PasswordFieldComponent} from "./password/PasswordFieldComponent";
import {CheckboxFieldComponent} from "./checkbox/CheckboxFieldComponent";
import {RadioFieldComponent} from "./radio/RadioFieldComponent";
import {SelectFieldComponent} from "./select/SelectFieldComponent";
import {DefaultFieldInjector, UNKNOWN_FIELD} from "./DefaultFieldInjector";

describe("FormEngine/Definition/DefaultFieldInjector", () => {

    describe("Mapping", () => {

        it("Should display TextField on INPUT_TEXT", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_TEXT)).toBe(TextFieldComponent);
        });

        it("Should display EmailField on INPUT_EMAIL", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_EMAIL)).toBe(EmailFieldComponent);
        });

        it("Should display IntegerField on INPUT_INTEGER", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_INTEGER)).toBe(IntegerFieldComponent);
        });

        it("Should display PasswordField on INPUT_PASSWORD", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_PASSWORD)).toBe(PasswordFieldComponent);
        });

        it("Should display PasswordField on INPUT_SELECT", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_SELECT)).toBe(SelectFieldComponent);
        });

        it("Should display PasswordField on INPUT_RADIO", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_RADIO)).toBe(RadioFieldComponent);
        });

        it("Should display PasswordField on INPUT_CHECKBOX", () => {
            expect(DefaultFieldInjector.inject(FieldTypes.INPUT_CHECKBOX)).toBe(CheckboxFieldComponent);
        });

        it("Should display nothing on unknown field", () => {
            expect(DefaultFieldInjector.inject(new FieldType("unexpected"))).toBe(UNKNOWN_FIELD);
        });

    });
});