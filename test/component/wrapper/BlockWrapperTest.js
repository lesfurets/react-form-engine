import React from "react";
import {createStore} from "redux";

import {shallow, mount} from "enzyme";
import reducer from "../../../src/redux/reducers";
import {ERROR, initTest} from "../../../test/test-utils";
import {FIELD_EVENT, FieldWrapper} from "../../../src/component/wrapper/FieldWrapper";
import {BlockWrapper, BLOCK_EVENT, BlockWrapperComponent} from "../../../src/component/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/validation";
import {Provider} from "react-redux";

initTest();

describe("FormEngine/Wrapper/BlockWrapper", () => {
    let emptyCallback = () => {
    };

    let FieldView = ({children}) => (<div>{children}</div>);

    let TestBlockView = ({children, onValidation}) => (
        <div>
            <div>{children}</div>
            <button className="TestButton" onClick={onValidation}/>
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

    let mountBlock = (props) => {
        return shallow(<BlockWrapperComponent {...props} fieldContext={{}}/>)
    };

    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let container = mountBlock({
                block: blockTest,
                onBlockEvent: emptyCallback,
                View: TestBlockView,
                FieldView: FieldView,
            });
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
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block}
                                  onEvent={onBlockEvent}
                                  View={TestBlockView}
                                  FieldView={FieldView}/>
                </Provider>);
            container.find(".TestButton").simulate("click");
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALID, block);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalled();
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

        // it("Should not validate if Field is visible and invalid", () => {
        //     checkBlockValidation(false, {id: 'testChild1', type: 'type-test', getValidation: () => ERROR});
        // });

        // it("Should validate if Field in error if not visible", () => {
        //     checkBlockValidation(true, {
        //         id: 'testChild1',
        //         type: 'type-test',
        //         isVisible: () => false,
        //         getValidation: () => ERROR
        //     });
        // });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = "event";
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            let container = mountBlock({
                block: blockTest,
                onEvent: onEvent,
                View: TestBlockView,
                FieldView: FieldView,
            });
            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, blockTest, details);
        });

        it("Should forward field events", () => {
            // Given
            let event = "event";
            let field = "field";
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            let container = mountBlock({
                block: blockTest,
                onEvent: onEvent,
                View: TestBlockView,
                FieldView: FieldView,
            });
            container.instance().onFieldEvent(event, field, details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, field, details);
        });

    });

});