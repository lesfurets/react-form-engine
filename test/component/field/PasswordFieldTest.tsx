import * as React from "react";
import {PasswordField} from "../../../src/component/field/PasswordField";
import {shallow} from "enzyme";
import {TestUtils} from "../../TestUtils";
import {Field} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";


TestUtils.init()

describe("FormEngine/Field/PasswordField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_PASSWORD,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = shallow(<PasswordField field={field}
                                                   onFieldEvent={TestUtils.emptyCallback}
                                                   contextValue=""/>);
            expect(container.find("input").props().type).toBe("password");
        });
    });

});