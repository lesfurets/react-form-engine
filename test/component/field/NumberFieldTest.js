import React from "react";
import {shallow} from "enzyme";
import {NumberField} from "../../../src/component/field/NumberField";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Field/NumericField", () => {
    let testId = "testId";
    let emptyCallback = () => {
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = shallow(<NumberField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("input").props().inputMode).toBe("decimal");
        });
    });

    describe("Symbol", () => {
        it("Input should have no symbol by default", () => {
            let container = shallow(<NumberField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("TextField-symbol").length).toBe(0);
        });

        it("Input should symbol if specified", () => {
            let symbol = "%";
            let container = shallow(<NumberField field={{id: testId, symbol: symbol}}
                                                                helperContext={{}}
                                                                onValueChange={emptyCallback}
                                                                fieldContext={{}}/>);
            expect(container.find(".TextField-symbol").length).toBe(1);
            expect(container.find(".TextField-symbol").text()).toEqual(symbol);
        });
    });

});