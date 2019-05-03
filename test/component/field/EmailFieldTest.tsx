import * as React from "react";
import {shallow} from "enzyme";
import * as TestUtils from "../../TestUtils";
import {EmailField} from "../../../src/component/field/EmailField";
import {Field} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";

TestUtils.init();

describe("FormEngine/Field/EmailField", () => {
    let emptyCallback = () => {};
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type email", () => {
            let container = shallow(<EmailField field={field}
                                               onValueChange={emptyCallback}
                                               contextValue=""/>);
            expect(container.find("input").props().type).toBe("email");
            expect(container.find("input").props().inputMode).toBe("email");
        });
    });

});