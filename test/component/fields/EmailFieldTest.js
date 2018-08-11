import React from "react";
import {shallow} from "enzyme";
import {EmailField} from "../../../src/component/fields/EmailField";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Fields/EmailField", () => {
    let testId = "testId";
    let emptyCallback = () => {
    };

    describe("Construction", () => {
        it("input should have type decimal", () => {
            let container = shallow(<EmailField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("input").props().type).toBe("email");
            expect(container.find("input").props().inputMode).toBe("email");
        });
    });

});