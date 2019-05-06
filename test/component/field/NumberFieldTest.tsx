import * as React from "react";
import {shallow} from "enzyme";
import {NumberField} from "../../../src/component/field/NumberField";
import {TestUtils} from "../../TestUtils";
import {Field} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";

TestUtils.init();

describe("FormEngine/Field/NumericField", () => {
    let testId = "testId";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = shallow(<NumberField field={field}
                                               onValueChange={TestUtils.emptyCallback}
                                               contextValue=""/>);
            expect(container.find("input").props().inputMode).toBe("decimal");
        });
    });

    describe("Symbol", () => {
        it("Input should have no symbol by default", () => {
            let container = shallow(<NumberField field={field}
                                               onValueChange={TestUtils.emptyCallback}
                                               contextValue=""/>);
            expect(container.find("TextField-symbol").length).toBe(0);
        });

        it("Input should symbol if specified", () => {
            let symbol = "%";
            let container = shallow(<NumberField field={{... field, symbol: symbol}}
                                                                onValueChange={TestUtils.emptyCallback}
                                                                contextValue=""/>);
            expect(container.find(".TextField-symbol").length).toBe(1);
            expect(container.find(".TextField-symbol").text()).toEqual(symbol);
        });
    });

});