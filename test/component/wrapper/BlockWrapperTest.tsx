import * as React from "react";

import {createStore} from "redux";

import {mount, shallow} from "enzyme";
import reducer from "../../../src/redux/reducers";
import {FieldWrapper} from "../../../src/component/wrapper/FieldWrapper";
import {BlockWrapper, BlockWrapperComponent} from "../../../src/component/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/validation/Validation";
import {Provider} from "react-redux";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {TestUtils} from "../../TestUtils";
import {BlockViewProps} from "../../../src/component/view/BlockView";
import {FieldViewProps} from "../../../src/component/view/FieldView";
import {Block, Field} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";

TestUtils.init();

describe("FormEngine/Wrapper/BlockWrapper", () => {
    let TestFieldView = (p: FieldViewProps) => (<div>{p.children}</div>);
    let TestBlockView = (p: BlockViewProps) => (
        <div>
            <div>{p.children}</div>
            <button className="TestButton" onClick={() => p.onEvent!(BLOCK_EVENT.NEXT)}/>
        </div>
    );

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
            let container = shallow(<BlockWrapperComponent
                block={blockTest}
                setFieldValue={TestUtils.emptyCallback}
                View={TestBlockView}
                FieldView={TestFieldView}
                fieldContext={{}}/>);
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
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block}
                                  View={TestBlockView}
                                  FieldView={TestFieldView}/>
                </Provider>);
            container.find(".TestButton").simulate("click");
            expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, block, null);
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, null);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, null);
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
                View={TestBlockView}
                FieldView={TestFieldView}
                fieldContext={{}}/>);

            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, blockTest, details);
        });

    });

});