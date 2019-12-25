import * as React from "react";
import {PasswordField} from "../../../../src/theme/component/field/PasswordField";
import {mount} from "enzyme";
import {emptyCallback, initTest} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Field} from "../../../../src/definition/model/Field";


initTest();

describe("FormEngine/Field/PasswordField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_PASSWORD,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = mount(<PasswordField field={field}
                                                   onFieldEvent={emptyCallback}
                                                   contextValue=""/>);
            expect(container.find("input").props().type).toBe("password");
        });
    });

});