import React from "react";
import {shallow, mount} from "enzyme";
import {initTest} from "../../test-utils";
import {BlockView} from "../../../src/component/view/BlockView";
import {BLOCK_EVENT, BLOCK_STATE} from "../../../src/component/wrapper/BlockWrapper";
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