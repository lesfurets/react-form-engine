import React from "react";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {FieldTypes} from "../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../src/definition/FieldInjector";
import {TextField} from "../../src/component/field/TextField";
import {EmailField} from "../../src/component/field/EmailField";
import {NumberField} from "../../src/component/field/NumberField";
import {PasswordField} from "../../src/component/field/PasswordField";

configure({adapter: new Adapter()});

describe("FormEngine/Definition/FieldTypes", () => {


    Object.values(FieldTypes).forEach(type => {

        describe(type.id, () => {
            it("Should have id", () => {
                expect(type.id).not.toBe(null);
                expect(typeof type.id).toBe("string");
            });

            it("Should have label", () => {
                expect(type.id).not.toBe(null);
                expect(typeof type.id).toBe("string");
            });
        });

    });

});