import * as React from "react";

import {mount} from "enzyme";
import {BlockWrapper} from "../../../src/component/wrapper/BlockWrapper";
import {FormWrapper} from "../../../src/component/wrapper/FormWrapper";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {TestUtils} from "../../TestUtils";
import {createStore} from "redux";
import reducer from "../../../src/redux/reducers";
import {Provider} from "react-redux";

TestUtils.init();

describe("FormEngine/Wrapper/FormWrapper", () => {
    let store = createStore(reducer);

    let formModel = {
        id: "form",
        blocks:
            [
                {id: "block1",label: "block1", index:0, fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
                {id: "block2",label: "block2", index:1, fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
            ],
    };

    describe("Blocks", () => {
        it("Should render Blocks", () => {
            let container = mount(
                <Provider store={store}>
                    <FormWrapper form={formModel}/>
                </Provider>);
            expect(container.find(BlockWrapper).length).toBe(formModel.blocks.length);
        });
    });

});