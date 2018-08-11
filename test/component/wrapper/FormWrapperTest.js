import React from "react";
import {createStore} from "redux";

import {shallow, mount} from "enzyme";
import reducer from "../../../src/redux/reducers";
import {ERROR, initTest} from "../../../test/test-utils";
import {FIELD_EVENT, FieldWrapper} from "../../../src/component/wrapper/FieldWrapper";
import {BlockWrapper, BLOCK_EVENT, BlockWrapperComponent} from "../../../src/component/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/validation";
import {Provider} from "react-redux";
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