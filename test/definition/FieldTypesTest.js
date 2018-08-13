import React from "react";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import {FieldTypes, FieldTypesDetails} from "../../src/definition/FieldTypes";
import {FieldInjector, UNKNOWN_FIELD} from "../../src/definition/FieldInjector";
import {TextField} from "../../src/component/field/TextField";
import {EmailField} from "../../src/component/field/EmailField";
import {NumberField} from "../../src/component/field/NumberField";
import {PasswordField} from "../../src/component/field/PasswordField";

configure({adapter: new Adapter()});

describe("FormEngine/Definition/FieldTypes", () => {


    Object.values(FieldTypes).forEach(type => {

        let detail = FieldTypesDetails[type];

        describe(type.id, () => {
            it("Should have label", () => {
                expect(detail.label).not.toBe(null);
                expect(typeof detail.label).toBe("string");
            });
        });

    });

});