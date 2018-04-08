import React from "react";
import {mount, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "react-redux";
import {createStore} from "redux";

import reducer from "../../../src/redux/reducers";
import FieldWrapper from "../../../src/component/wrapper/FieldWrapper";
import BlockWrapper, {BLOCK_STATE, BLOCK_EVENT} from "../../../src/component/wrapper/BlockWrapper";
import {Validation, VALID} from "../../../src/definition/validation"

configure({adapter: new Adapter()});

describe("FormEngine/Wrapper/Block", () => {

    let store = createStore(reducer);

    describe("Fields Management", () => {

        let block = {
            id: "block-test",
            fields: [
                {id: 'testChild1', type: 'type-test'},
                {id: 'testChild2', type: 'type-test'},
            ]
        };

        it("Should render all fields by default", () => {
            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} onBlockEvent={() => {
                    }}/>
                </Provider>);

            // Then
            expect(container.find(FieldWrapper).length).toBe(2);
        });

        it("Should render fields in state DOING", () => {
            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} blockState={BLOCK_STATE.DOING} onBlockEvent={() => {
                    }}/>
                </Provider>);

            // Then
            expect(container.find(FieldWrapper).length).toBe(2);
        });

        it("Should not render fields in state TODO", () => {
            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} blockState={BLOCK_STATE.TODO} onBlockEvent={() => {
                    }}/>
                </Provider>);

            // Then
            expect(container.find(FieldWrapper).length).toBe(0);
        });

        it("Should not render fields in state DONE", () => {
            // Given
            let block = {
                id: "block-test",
                fields: [
                    {id: 'testChild1', type: 'type-test'},
                    {id: 'testChild2', type: 'type-test'},
                ]
            };

            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} blockState={BLOCK_STATE.DONE} onBlockEvent={() => {
                    }}/>
                </Provider>);

            // Then
            expect(container.find(FieldWrapper).length).toBe(0);
        });
    });

    describe("Validation", () => {

        it("Should validate if Field has no doCalidation", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test'});
        });

        it("Should validate if Field is valid", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test', doValidation: () => VALID});
        });

        it("Should not validate if Field is invalid", () => {
            checkBlockValidation(false, {id: 'testChild1', type: 'type-test', doValidation: () => ERROR});
        });

        it("Should validate if all Fields are valid", () => {
            checkBlockValidation(true, [
                {id: 'testChild1', type: 'type-test', doValidation: () => VALID},
                {id: 'testChild2', type: 'type-test', doValidation: () => VALID},
                {id: 'testChild3', type: 'type-test', doValidation: () => VALID}]);
        });

        it("Should not validate if 1 Fields is invalid", () => {
            checkBlockValidation(false, [
                {id: 'testChild1', type: 'type-test', doValidation: () => VALID},
                {id: 'testChild2', type: 'type-test', doValidation: () => ERROR},
                {id: 'testChild3', type: 'type-test', doValidation: () => VALID}]);
        });

        const ERROR = new Validation(false, "error-test");

        let checkBlockValidation = (success, fields) => {
            // Given
            let onBlockEvent = jasmine.createSpy();
            let block = {
                id: "block-test",
                fields: [
                    {id: 'testChild0', type: 'type-test', doValidation: () => VALID}
                ]
            };
            block.fields = block.fields.concat(fields);

            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} onBlockEvent={onBlockEvent} blockIndex={0}/>
                </Provider>);
            container.find(".principal-cta").simulate("click");

            // Then
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, 0);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.NEXT, 0);
            }
        };

    });

    describe("State class", () => {

        it("Should have specific class in state DOING", () => {
            checkStateAsClass(BLOCK_STATE.DOING);
        });

        it("Should have specific class in state TODO", () => {
            checkStateAsClass(BLOCK_STATE.TODO);
        });

        it("Should have specific class in state DONE", () => {
            checkStateAsClass(BLOCK_STATE.DONE);
        });

        function checkStateAsClass(state) {
            // Given
            let block = {
                id: "block-test",
                fields: []
            };

            // When
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block} blockState={state} onBlockEvent={() => {
                    }}/>
                </Provider>);

            // Then
            expect(container.find("." + state.toLowerCase()).length).toBe(1);
        }

    });

});