import * as React from "react";
import {shallow, mount} from "enzyme";
import {BlockView} from "../../../src/component/view/BlockView";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {BLOCK_STATE} from "../../../src/definition/model/Block";

TestUtils.init();

describe("FormEngine/View/BlockView", () => {

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
            let container = shallow(<BlockView block={{...blockTest, index: 0 }} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(0);
        });

        it("Should display next and orevious buttons for other blocks", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 1}} index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(1);
        });

        it("Should display next and previous buttons for other blocks", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 1}} index={1} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(1);
        });

        it("Should display label 'next' by default in next button", () => {
            let container = mount(<BlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-next").first().text()).toBe("Next");
        });

        it("Should display model ctaLabel in next button", () => {
            let ctaLabel = "ctaLabel";
            let container = mount(<BlockView block={{...blockTest, index: 0, ctaLabel: ctaLabel}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-next").first().text()).toBe(ctaLabel);
        });

        it("Should call validation when clicking next", () => {
            let onEvent = jasmine.createSpy();
            let container = shallow(<BlockView block={{...blockTest, index: 1}} onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".BlockView-next").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BLOCK_EVENT.NEXT);
        });

        it("Should call event when clicking previous", () => {
            let onEvent = jasmine.createSpy();
            let container = shallow(<BlockView block={{...blockTest, index: 1}} onEvent={onEvent} index={1} blockState={BLOCK_STATE.DOING}/>);

            container.find(".BlockView-previous").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BLOCK_EVENT.PREVIOUS);
        });
    });

    describe("State", () => {
        it("Should display content by default", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-content").length).toBe(1);
        });

        it("Should display content if state is DOING", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-content").length).toBe(1);
        });

        it("Should not display content if state is DONE", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.DONE}/>);

            expect(container.find(".BlockView-content").length).toBe(0);
        });

        it("Should not display content if state is TODO", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 0}} index={0} blockState={BLOCK_STATE.TODO}/>);

            expect(container.find(".BlockView-content").length).toBe(0);
        });
    });

});