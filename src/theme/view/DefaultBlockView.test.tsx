import * as React from "react";
import {mount, shallow} from "enzyme";
import {DefaultBlockView} from "./DefaultBlockView";
import {BlockEvents, BlockViewEvents} from "../../definition/event/events";
import {initTest, mockUseBlock} from "../../_tests_/TestUtils";
import {FieldTypes} from "../../definition/FieldTypes";
import {BLOCK_STATE} from "../../definition/model/Block";

initTest();

describe("FormEngine/View/DefaultBlockView", () => {

    let blockTest = {
        id: "block-test",
        label: "",
        fields: [
            {id: 'testChild1', type: FieldTypes.INPUT_TEXT},
            {id: 'testChild2', type: FieldTypes.INPUT_TEXT},
        ]
    };

    describe("Navigation", () => {
        it("Should just display next button for first block", () => {
            mockUseBlock({...blockTest });
            let container = shallow(<DefaultBlockView index={0} blockState={BLOCK_STATE.DOING}/>);
            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(0);
        });

        it("Should display next and orevious buttons for other blocks", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(1);
        });

        it("Should display next and previous buttons for other blocks", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(1);
        });

        it("Should display label 'next' by default in next button", () => {
            mockUseBlock(blockTest);
            let container = mount(<DefaultBlockView index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").first().text()).toBe("Next");
        });

        it("Should display model ctaLabel in next button", () => {
            let ctaLabel = "ctaLabel";
            mockUseBlock({...blockTest, ctaLabel: ctaLabel});
            let container = mount(<DefaultBlockView index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").first().text()).toBe(ctaLabel);
        });

        it("Should call validation when clicking next", () => {
            let onEvent = jasmine.createSpy();
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".DefaultBlockView-next").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BlockViewEvents.REQUEST_NEXT);
        });

        it("Should call event when clicking previous", () => {
            let onEvent = jasmine.createSpy();
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".DefaultBlockView-previous").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BlockViewEvents.REQUEST_PREVIOUS);
        });
    });

    describe("State", () => {
        it("Should display content by default", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(1);
        });

        it("Should display content if state is DOING", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(1);
        });

        it("Should not display content if state is DONE", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={0} blockState={BLOCK_STATE.DONE}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(0);
        });

        it("Should not display content if state is TODO", () => {
            mockUseBlock(blockTest);
            let container = shallow(<DefaultBlockView index={0} blockState={BLOCK_STATE.TODO}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(0);
        });
    });

});