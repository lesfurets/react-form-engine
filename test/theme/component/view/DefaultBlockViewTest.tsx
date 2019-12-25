import * as React from "react";
import {mount, shallow} from "enzyme";
import {DefaultBlockView} from "../../../../src/theme/component/view/DefaultBlockView";
import {BLOCK_EVENT} from "../../../../src/definition/event/events";
import {initTest} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {BLOCK_STATE} from "../../../../src/definition/model/Block";

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
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 0 }} index={0} blockState={BLOCK_STATE.DOING}/>);
            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(0);
        });

        it("Should display next and orevious buttons for other blocks", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 1}} index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(1);
        });

        it("Should display next and previous buttons for other blocks", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 1}} index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").length).toBe(1);
            expect(container.find(".DefaultBlockView-previous").length).toBe(1);
        });

        it("Should display label 'next' by default in next button", () => {
            let container = mount(<DefaultBlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").first().text()).toBe("Next");
        });

        it("Should display model ctaLabel in next button", () => {
            let ctaLabel = "ctaLabel";
            let container = mount(<DefaultBlockView block={{...blockTest, index: 0, ctaLabel: ctaLabel}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-next").first().text()).toBe(ctaLabel);
        });

        it("Should call validation when clicking next", () => {
            let onEvent = jasmine.createSpy();
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 1}} onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".DefaultBlockView-next").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT);
        });

        it("Should call event when clicking previous", () => {
            let onEvent = jasmine.createSpy();
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 1}} onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".DefaultBlockView-previous").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BLOCK_EVENT.PREVIOUS);
        });
    });

    describe("State", () => {
        it("Should display content by default", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(1);
        });

        it("Should display content if state is DOING", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(1);
        });

        it("Should not display content if state is DONE", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DONE}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(0);
        });

        it("Should not display content if state is TODO", () => {
            let container = shallow(<DefaultBlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.TODO}/>);

            expect(container.find(".DefaultBlockView-content").length).toBe(0);
        });
    });

});