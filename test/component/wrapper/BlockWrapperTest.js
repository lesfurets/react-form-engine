import React from "react";
import {createStore} from "redux";

import {shallow, mount} from "enzyme";
import reducer from "../../../src/redux/reducers";
import {ERROR, initTest} from "../../../test/test-utils";
import {FieldWrapper} from "../../../src/component/wrapper/FieldWrapper";
import {BlockWrapper, BlockWrapperComponent} from "../../../src/component/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/Validation";
import {Provider} from "react-redux";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {VisibilityBuilder} from "../../../src/definition/VisibilityUtils";
import {mockPredicate} from "../../test-utils";

initTest();

describe("FormEngine/Wrapper/BlockWrapper", () => {
    let emptyCallback = () => {
    };

    let FieldView = ({children}) => (<div>{children}</div>);

    let TestBlockView = ({children, onEvent}) => (
        <div>
            <div>{children}</div>
            <button className="TestButton" onClick={() => onEvent(BLOCK_EVENT.NEXT)}/>
        </div>
    );

    let store = createStore(reducer);

    let blockTest = {
        id: "block-test",
        fields: [
            {id: 'testChild1', type: 'type-test'},
            {id: 'testChild2', type: 'type-test'},
        ]
    };

    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let container = shallow(<BlockWrapperComponent
                block={blockTest}
                onEvent={emptyCallback}
                View={TestBlockView}
                FieldView={FieldView}
                fieldContext={{}}/>);
            expect(container.find(FieldWrapper).length).toBe(blockTest.fields.length);
        });
    });

    describe("Validation", () => {

        let checkBlockValidation = (success, fields) => {
            let onBlockEvent = jasmine.createSpy();
            let block = {
                id: "block-test",
                fields: [
                    {id: 'testChild0', type: 'type-test', getValidation: () => VALID}
                ]
            };
            block.fields = block.fields.concat(fields);
            EVENT_MULTICASTER.subscribe(onBlockEvent);
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block}
                                  View={TestBlockView}
                                  FieldView={FieldView}/>
                </Provider>);
            container.find(".TestButton").simulate("click");
            expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, block, undefined);
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, undefined);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, undefined);
            }
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test'});
        });

        it("Should validate if Field is valid", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test', getValidation: () => VALID});
        });

        it("Should validate if Field is visible and valid", () => {
            checkBlockValidation(true, {
                id: 'testChild1',
                type: 'type-test',
                isVisible: () => true,
                getValidation: () => VALID
            });
        });

        it("Should validate if all Fields are valid", () => {
            checkBlockValidation(true, [
                {id: 'testChild1', type: 'type-test', getValidation: () => VALID},
                {id: 'testChild2', type: 'type-test', getValidation: () => VALID},
                {id: 'testChild3', type: 'type-test', getValidation: () => VALID}]);
        });

        it("Should not validate if 1 Fields is not valid", () => {
            checkBlockValidation(false, [
                {id: 'testChild1', type: 'type-test', getValidation: () => VALID},
                {id: 'testChild2', type: 'type-test', getValidation: () => ERROR},
                {id: 'testChild3', type: 'type-test', getValidation: () => VALID}]);
        });

        it("Should not validate if Field is visible and invalid", () => {
            checkBlockValidation(false, {id: 'testChild1', type: 'type-test', getValidation: () => ERROR});
        });

        it("Should validate if Field in error if not visible", () => {
            checkBlockValidation(true, {
                id: 'testChild1',
                type: 'type-test',
                visibility: VisibilityBuilder.isNotVisible().when(mockPredicate(() => true)),
                getValidation: () => ERROR
            });
        });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = "event";
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow(<BlockWrapperComponent
                block={blockTest}
                View={TestBlockView}
                FieldView={FieldView}
                fieldContext={{}}/>);

            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, blockTest, details);
        });

    });

});