import * as React from "react";
import {PasswordField} from "../../../../src/theme/component/field/PasswordField";
import {mount, shallow} from "enzyme";
import {TestUtils} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Field} from "../../../../src/definition/model/Field";


TestUtils.init()

describe("FormEngine/Field/PasswordField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_PASSWORD,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = mount(<PasswordField field={field}
                                                   onFieldEvent={TestUtils.emptyCallback}
                                                   contextValue=""/>);
            expect(container.find("input").props().type).toBe("password");
        });
    });

});