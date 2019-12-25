import * as React from "react";
import {shallow} from "enzyme";
import {FieldWrapper} from "../../../src/structure/wrapper/FieldWrapper";
import {BlockWrapper} from "../../../src/structure/wrapper/BlockWrapper";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {dummyBlock, mockFormStore, mockThemeContext, TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {Field} from "../../../src/definition/model/Field";
import {Block} from "../../../src/definition/model/Block";
import {BlockView, BlockViewProps} from "../../../src/definition/view/BlockView";
import {FieldContext} from "../../../src/definition/FieldContext";
import {DefaultBlockView} from "../../../src/theme/component/view/DefaultBlockView";
import {generateMock} from "./MockComponent";

TestUtils.init();

interface MountingProps {
    block: Block,
    wrapperProps?: any,
    BlockView?: BlockView,
    fieldContext?: FieldContext,
}

const viewMock = generateMock<BlockViewProps>();

const shallowWrapper = (props: MountingProps) => {
    mockFormStore(props.fieldContext);
    mockThemeContext({
        BlockView: props.BlockView || DefaultBlockView,
    });

    return shallow(<BlockWrapper block={props.block}/>);
};

let testDetails = "test";

describe("FormEngine/Wrapper/BlockWrapper", () => {

    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let container = shallowWrapper({block: dummyBlock});

            expect(container.find(FieldWrapper).length).toBe(dummyBlock.fields.length);
        });
    });

    describe("Validation", () => {

        let checkBlockValidation = (success: boolean, fields: Field[]) => {
            let onBlockEvent = jasmine.createSpy();
            let block: Block = {...dummyBlock,};
            block.fields = block.fields.concat(fields);

            EVENT_MULTICASTER.subscribe(onBlockEvent);

            let container = shallowWrapper({block: block, BlockView: viewMock.component});

            viewMock.handleMock(container, (props) => props.onEvent!(BLOCK_EVENT.NEXT, testDetails));

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
            checkBlockValidation(false, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => TestUtils.ERROR
            }]);
        });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BLOCK_EVENT.NEXT;
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallowWrapper({block: dummyBlock, BlockView: viewMock.component});

            viewMock.handleMock(container, (props) => props.onEvent!(BLOCK_EVENT.NEXT, testDetails));

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, dummyBlock, testDetails);
        });

    });

});