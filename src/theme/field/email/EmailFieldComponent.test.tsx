import * as React from "react";
import {mount} from "enzyme";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {EmailFieldComponent} from "./EmailFieldComponent";
import {FieldTypes} from "../../../definition/FieldTypes";
import {Field} from "../../../definition/model/Field";

initTest();

describe("FormEngine/Field/EmailField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type email", () => {
            let container = mount(<EmailFieldComponent field={field}
                                                       onFieldEvent={emptyCallback}
                                                       contextValue=""/>);
            expect(container.find("input").props().type).toBe("email");
            expect(container.find("input").props().inputMode).toBe("email");
        });
    });

});