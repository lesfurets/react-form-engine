import React from "react";
import {createStore} from "redux";

import reducer from "../../../src/redux/reducers";
import {ERROR, initTest, mountInRedux} from "../../../test/test-utils";
import FieldWrapper from "../../../src/component/wrapper/FieldWrapper";
import BlockWrapper, {BLOCK_EVENT, BLOCK_STATE} from "../../../src/component/wrapper/BlockWrapper";
import {VALID, Validation} from "../../../src/definition/validation";

initTest();

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
            let container = mountInRedux(BlockWrapper, {
                block: block,
                onBlockEvent: () => null
            };

            // Then
            expect(container.find(FieldWrapper).length).toBe(2);
        });

        it("Should render fields in state DOING", () => {
            // When

            let container = mountInRedux(BlockWrapper, {
                block: block,
                blockState: BLOCK_STATE.DOING,
                onBlockEvent: () => null
            });

            // Then
            expect(container.find(FieldWrapper).length).toBe(2);
        });

        it("Should not render fields in state TODO", () => {
            // When
            let container = mountInRedux(BlockWrapper, {
                block: block,
                blockState: BLOCK_STATE.TODO,
                onBlockEvent: () => null
            });

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
            let container = mountInRedux(BlockWrapper, {
                block: block,
                blockState: BLOCK_STATE.DONE,
                onBlockEvent: () => null
            });

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
            let container = mountInRedux(BlockWrapper, {block: block, onBlockEvent: onBlockEvent, blockIndex: 0});

            container.find(".principal-cta").simulate("click");

            // Then
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, 0);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.NEXT, 0);
            }
        };

    });

    describe("State", () => {

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
            let container = mountInRedux(BlockWrapper, {
                block: block,
                blockState: state,
                onBlockEvent: () => null
            });

            // Then
            expect(container.find(".block-wrapper." + state.toLowerCase()).length).toBe(1);
        }

    });

});