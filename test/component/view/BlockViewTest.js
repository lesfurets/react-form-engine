import React from "react";
import {shallow, mount} from "enzyme";
import {initTest} from "../../test-utils";
import {BlockView} from "../../../src/component/view/BlockView";
import {BLOCK_EVENT, BLOCK_STATE} from "../../../src/component/wrapper/BlockWrapper";

initTest();

describe("FormEngine/View/BlockView", () => {

    let blockTest = {
        id: "block-test",
        fields: [
            {id: 'testChild1', type: 'type-test'},
            {id: 'testChild2', type: 'type-test'},
        ]
    };

    describe("Navigation", () => {
        it("Should just display next button for first block", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 0}} />);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(0);
        });

        it("Should display next and orevious buttons for other blocks", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 1}} />);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(1);
        });

        it("Should display next and previous buttons for other blocks", () => {
            let container = shallow(<BlockView block={{...blockTest, index: 1}} />);

            expect(container.find(".BlockView-next").length).toBe(1);
            expect(container.find(".BlockView-previous").length).toBe(1);
        });

        it("Should display label 'next' by default in next button", () => {
            let container = mount(<BlockView block={{...blockTest}} />);

            expect(container.find(".BlockView-next").first().text()).toBe("Next");
        });

        it("Should display model ctaLabel in next button", () => {
            let ctaLabel = "ctaLabel";
            let container = mount(<BlockView block={{...blockTest, ctaLabel: ctaLabel}} />);

            expect(container.find(".BlockView-next").first().text()).toBe(ctaLabel);
        });

        it("Should call validation when clicking next", () => {
            let onValidation = jasmine.createSpy();
            let container = shallow(<BlockView block={{...blockTest, index: 1}} onValidation={onValidation}/>);

            container.find(".BlockView-next").simulate("click");

            expect(onValidation).toHaveBeenCalled();
        });

        it("Should call event when clicking previous", () => {
            let onEvent = jasmine.createSpy();
            let container = shallow(<BlockView block={{...blockTest, index: 1}} onEvent={onEvent}/>);

            container.find(".BlockView-previous").simulate("click");

            expect(onEvent).toHaveBeenCalledWith(BLOCK_EVENT.PREVIOUS);
        });
    });

    describe("State", () => {
        it("Should display content by default", () => {
            let container = shallow(<BlockView block={{...blockTest}}/>);

            expect(container.find(".BlockView-content").length).toBe(1);
        });

        it("Should display content if state is DOING", () => {
            let container = shallow(<BlockView block={{...blockTest}} blockState={BLOCK_STATE.DOING}/>);

            expect(container.find(".BlockView-content").length).toBe(1);
        });

        it("Should not display content if state is DONE", () => {
            let container = shallow(<BlockView block={{...blockTest}} blockState={BLOCK_STATE.DONE}/>);

            expect(container.find(".BlockView-content").length).toBe(0);
        });

        it("Should not display content if state is TODO", () => {
            let container = shallow(<BlockView block={{...blockTest}} blockState={BLOCK_STATE.TODO}/>);

            expect(container.find(".BlockView-content").length).toBe(0);
        });
    });

});