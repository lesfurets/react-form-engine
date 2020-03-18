import * as React from "react";
import {shallow} from "enzyme";
import {DefaultFormView} from "./DefaultFormView";
import {FieldTypes} from "../../definition/FieldTypes";
import {initTest} from "../../_tests_/TestUtils";

initTest();

describe("FormEngine/View/DefaultFormView", () => {

    let formModel = {
        id: "form",
        blocks:
            [
                {id: "block1",label: "block1", index:0, fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
                {id: "block2",label: "block2", index:1, fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
            ],
    };

    describe("Content", () => {

        it("Should display content", () => {
            let container = shallow(<DefaultFormView />);

            expect(container.find(".DefaultFormView").length).toBe(1);
        });

    });

});