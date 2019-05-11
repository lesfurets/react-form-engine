import * as React from "react";
import {shallow} from "enzyme";
import {DefaultFormView} from "../../../src/component/view/DefaultFormView";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {TestUtils} from "../../TestUtils";

TestUtils.init();

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
            let container = shallow(<DefaultFormView form={formModel}/>);

            expect(container.find(".DefaultFormView").length).toBe(1);
        });

    });

});