import * as React from "react";
import {mount} from "enzyme";
import {emptyCallback, initTest} from "../../../TestUtils";
import {EmailField} from "../../../../src/theme/component/field/EmailField";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Field} from "../../../../src/definition/model/Field";

initTest();

describe("FormEngine/Field/EmailField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type email", () => {
            let container = mount(<EmailField field={field}
                                               onFieldEvent={emptyCallback}
                                               contextValue=""/>);
            expect(container.find("input").props().type).toBe("email");
            expect(container.find("input").props().inputMode).toBe("email");
        });
    });

});