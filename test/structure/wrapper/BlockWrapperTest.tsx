import * as React from "react";

import {createStore} from "redux";

import {mount, shallow} from "enzyme";
import reducer from "../../../src/redux/reducers";
import {FieldWrapper} from "../../../src/structure/wrapper/FieldWrapper";
import {BlockWrapper, BlockWrapperComponent} from "../../../src/structure/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/validation/Validation";
import {Provider} from "react-redux";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {Field} from "../../../src/definition/model/Field";
import {Block} from "../../../src/definition/model/Block";

TestUtils.init();

describe("FormEngine/Wrapper/BlockWrapper", () => {
    let store = createStore(reducer);

    let blockTest: Block = {
        id: "block-test",
        label: "block-label",
        index: 0,
        fields: [
            {id: 'testChild1', type: FieldTypes.INPUT_TEXT},
            {id: 'testChild2', type: FieldTypes.INPUT_TEXT},
        ]
    };

    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={blockTest}/>
                </Provider>);

            console.log(container.debug());
            expect(container.find(FieldWrapper).length).toBe(blockTest.fields.length);
        });
    });

    describe("Validation", () => {

        let checkBlockValidation = (success: boolean, fields: Field[]) => {
            let onBlockEvent = jasmine.createSpy();
            let block: Block = {
                id: "block-test",
                label: "block-label",
                index: 0,
                fields: [
                    {id: 'testChild0', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}
                ]
            };
            block.fields = block.fields.concat(fields);
            EVENT_MULTICASTER.subscribe(onBlockEvent);

            let container = shallow<BlockWrapperComponent>(<BlockWrapperComponent
                setFieldValue={TestUtils.emptyCallback}
                block={block}
                fieldContext={{}}/>);

            container.instance().onEvent(BLOCK_EVENT.NEXT,null);
            expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, block, null);
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, {});
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, {});
            }
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]);
        });

        it("Should validate if Field is valid", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should validate if Field is visible and valid", () => {
            checkBlockValidation(true, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                isVisible: () => true,
                getValidation: () => VALID
            }]);
        });

        it("Should validate if all Fields are valid", () => {
            checkBlockValidation(true,
                [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                {id: 'testChild2', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                {id: 'testChild3', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should not validate if 1 Fields is not valid", () => {
            checkBlockValidation(false,
                [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID},
                {id: 'testChild2', type: FieldTypes.INPUT_TEXT, getValidation: () => TestUtils.ERROR},
                {id: 'testChild3', type: FieldTypes.INPUT_TEXT, getValidation: () => VALID}]);
        });

        it("Should not validate if Field is visible and invalid", () => {
            checkBlockValidation(false, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => TestUtils.ERROR}]);
        });

        it("Should validate if Field in error if not visible", () => {
            checkBlockValidation(true, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                isVisible: () => false,
                getValidation: () => TestUtils.ERROR
            }]);
        });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BLOCK_EVENT.NEXT;
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow<BlockWrapperComponent>(<BlockWrapperComponent
                setFieldValue={TestUtils.emptyCallback}
                block={blockTest}
                fieldContext={{}}/>);

            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, blockTest, details);
        });

    });

});