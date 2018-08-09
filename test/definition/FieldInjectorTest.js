import React from "react";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {FieldTypes} from "../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../src/definition/FieldInjector";
import {TextField} from "../../src/component/fields/TextField";
import {EmailField} from "../../src/component/fields/EmailField";
import {NumberField} from "../../src/component/fields/NumberField";
import {PasswordField} from "../../src/component/fields/PasswordField";

configure({adapter: new Adapter()});

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