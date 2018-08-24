import React from "react";
import {shallow} from "enzyme";
import {initTest} from "../../test-utils";
import {FormView} from "../../../src/component/view/FormView";

initTest();

describe("FormEngine/View/FormView", () => {

    describe("Content", () => {

        it("Should display content", () => {
            let container = shallow(<FormView />);

            expect(container.find(".FormView").length).toBe(1);
        });

    });

});