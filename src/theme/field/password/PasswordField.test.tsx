import * as React from "react";
import {PasswordField} from "./PasswordField";
import {mount} from "enzyme";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {Field} from "../../../definition/model/Field";


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