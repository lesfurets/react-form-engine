import React from "react";
import {shallow} from "enzyme";
import {NumberField} from "../../../src/component/fields/NumberField";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Fields/NumericField", () => {
    let testId = "testId";
    let emptyCallback = () => {
    };

    describe("Construction", () => {
        it("input should have type decimal", () => {
            let container = shallow(<NumberField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("input").props().inputMode).toBe("decimal");
        });
    });

    describe("Symbol", () => {
        it("input should have no symbol by default", () => {
            let container = shallow(<NumberField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("TextField-symbol").length).toBe(0);
        });

        it("input should symbol if specified", () => {
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