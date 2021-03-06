import * as React from "react";
import {shallow} from "enzyme";
import {FieldWrapper} from "./FieldWrapper";
import {BlockWrapper} from "./BlockWrapper";
import {BlockEvents, BlockViewEvents} from "../definition/event/events";
import {EventCallBack} from "../definition/event/service/EventService";
import {
    dummyBlock,
    fieldError,
    initTest,
    mockEventContext,
    mockFormStore,
    mockThemeContext
} from "../_tests_/TestUtils";
import {FieldTypes} from "../definition/FieldTypes";
import {Field} from "../definition/model/Field";
import {Block} from "../definition/model/Block";
import {BlockView, BlockViewProps} from "../definition/theme/view/BlockView";
import {FormData} from "../definition/data/FormData";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {generateMock} from "../_tests_/MockComponent";

initTest();

interface MountingProps {
    block: Block,
    wrapperProps?: any,
    BlockView?: BlockView,
    fieldContext?: FormData,
    onEvent?: EventCallBack,
}

const viewMock = generateMock<BlockViewProps>();

const shallowWrapper = (props: MountingProps) => {
    mockFormStore(props.fieldContext);
    mockEventContext(props.onEvent);
    mockThemeContext({
        BlockView: props.BlockView || DefaultBlockView,
    });

    return shallow(<BlockWrapper index={0} block={props.block}/>);
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

            let container = shallowWrapper({block: block, BlockView: viewMock.component, onEvent: onBlockEvent});

            viewMock.handleMock(container, (props) => props.onEvent!(BlockViewEvents.REQUEST_NEXT, testDetails));

            expect(onBlockEvent).toHaveBeenCalledWith(BlockViewEvents.REQUEST_NEXT, block, testDetails);
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BlockEvents.VALIDATED, block, {});
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BlockEvents.VALIDATED, block, {});
            }
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]);
        });

        it("Should not validate if Field is visible and invalid", () => {
            checkBlockValidation(false, [{
                id: 'testChild1',
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => fieldError
            }]);
        });

    });

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BlockViewEvents.REQUEST_NEXT;
            let onEvent = jasmine.createSpy();

            // When
            let container = shallowWrapper({block: dummyBlock, BlockView: viewMock.component, onEvent: onEvent});

            viewMock.handleMock(container, (props) => props.onEvent!(BlockViewEvents.REQUEST_NEXT, testDetails));

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, dummyBlock, testDetails);
        });

    });

});