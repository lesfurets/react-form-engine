import React from "react";
import {shallow} from "enzyme";
import {PasswordField} from "../../../src/component/field/PasswordField";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Field/PasswordField", () => {
    let testId = "testId";
    let emptyCallback = () => {
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = shallow(<PasswordField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("input").props().type).toBe("password");
        });
    });

});