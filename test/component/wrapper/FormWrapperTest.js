import React from "react";

import {shallow} from "enzyme";
import {initTest} from "../../../test/test-utils";
import {BlockWrapper} from "../../../src/component/wrapper/BlockWrapper";
import FormWrapper from "../../../src/component/wrapper/FormWrapper";

initTest();

describe("FormEngine/Wrapper/FormWrapper", () => {
    let emptyCallback = () => {
    };

    let TestView = ({children}) => (<div>{children}</div>);

    let formModel = [
        {id: "block1", fields: [{id: 'testChild1', type: 'type-test'}]},
        {id: "block2", fields: [{id: 'testChild2', type: 'type-test'}]}
    ];

    describe("Blocks", () => {
        it("Should render Blocks", () => {
            let container = shallow(<FormWrapper
                form={formModel}
                onEvent={emptyCallback}
                View={TestView}
                BlockView={TestView}
                FieldView={TestView}/>);
            expect(container.find(BlockWrapper).length).toBe(formModel.length);
        });
    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = "event";
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            let container = shallow(<FormWrapper
                form={formModel}
                onEvent={onEvent}
                View={TestView}
                BlockView={TestView}
                FieldView={TestView}/>);
            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, formModel, details);
        });

        it("Should forward block events", () => {
            // Given
            let event = "event";
            let block = "block";
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            let container = shallow(<FormWrapper
                form={formModel}
                onEvent={onEvent}
                View={TestView}
                BlockView={TestView}
                FieldView={TestView}/>);
            container.instance().onBlockEvent(event, block, details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, block, details);
        });

    });

});