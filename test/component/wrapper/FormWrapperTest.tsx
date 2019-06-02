import * as React from "react";

import {mount, shallow} from "enzyme";
import {BlockWrapper} from "../../../src/component/wrapper/BlockWrapper";
import FormWrapper from "../../../src/component/wrapper/FormWrapper";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
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
    })

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BLOCK_EVENT.NEXT;
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow<FormWrapper>(<FormWrapper form={formModel}/>);
            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, formModel, details);
        });

    });

});