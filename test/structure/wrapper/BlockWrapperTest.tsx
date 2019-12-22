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
import { ThemeContext } from "../../../src/structure/context/ThemeContext";
import {BlockView} from "../../../src/definition/view/BlockView";
import {DefaultFieldView} from "../../../src/theme/component/view/DefaultFieldView";
import {DefaultFormView} from "../../../src/theme/component/view/DefaultFormView";
import {DefaultFieldInjector} from "../../../src/theme/component/field/DefaultFieldInjector";

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

    let testDetails = "test";

    let TestBlockView: BlockView = ({children, onEvent}) => (
        <div>
            <div>{children}</div>
            <button className="TestButton" onClick={() => onEvent!(BLOCK_EVENT.NEXT, testDetails)}/>
        </div>
    );

    const mountWrapper = (block: Block) => mount(
        <Provider store={store}>
            <ThemeContext.Provider value={{
                fieldInjector: DefaultFieldInjector.inject,
                FormView: DefaultFormView,
                BlockView: TestBlockView,
                FieldView: DefaultFieldView
            }}>
                <BlockWrapperComponent
                    setFieldValue={TestUtils.emptyCallback}
                    block={block}
                    fieldContext={{}}/>
            </ThemeContext.Provider>
        </Provider>
    );

    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let container = mountWrapper(blockTest);

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

            let container = mountWrapper(block);

            container.find(".TestButton").simulate("click");

            expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT, block, testDetails);
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, {});
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.VALIDATED, block, {});
            }
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]);
        });

        it("Should not validate if Field is visible and invalid", () => {
            checkBlockValidation(false, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT, getValidation: () => TestUtils.ERROR}]);
        });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BLOCK_EVENT.NEXT;
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = mountWrapper(blockTest);

            container.find(".TestButton").simulate("click");

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, blockTest, testDetails);
        });

    });

});