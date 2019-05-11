import * as React from "react";

import {shallow} from "enzyme";
import {BlockWrapper} from "../../../src/component/wrapper/BlockWrapper";
import FormWrapper from "../../../src/component/wrapper/FormWrapper";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {FormViewProps} from "../../../src/component/view/FormView";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {BLOCK_EVENT} from "../../../src/definition/event/events";
import {TestUtils} from "../../TestUtils";
import {FieldViewProps} from "../../../src/definition/view/FieldView";
import {BlockViewProps} from "../../../src/definition/view/BlockView";

TestUtils.init();

describe("FormEngine/Wrapper/FormWrapper", () => {
    let TestFormView = (p: FormViewProps) => (<div>{p.children}</div>);
    let TestFieldView = (p: FieldViewProps) => (<div>{p.children}</div>);
    let TestBlockView = (p: BlockViewProps) => (<div>{p.children}</div>);

    let formModel = {
        id: "form",
        blocks:
            [
                {id: "block1",label: "block1", index:0, fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
                {id: "block2",label: "block2", index:1, fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
            ],
    };

    describe("Blocks", () => {
        it("Should render Blocks", () => {
            let container = shallow(<FormWrapper
                form={formModel}
                View={TestFormView}
                BlockView={TestBlockView}
                FieldView={TestFieldView}/>);
            expect(container.find(BlockWrapper).length).toBe(formModel.blocks.length);
        });
    })

    describe("Event", () => {

        it("Should send events", () => {
            // Given
            let event = BLOCK_EVENT.NEXT;
            let details = "details";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow<FormWrapper>(<FormWrapper
                form={formModel}
                View={TestFormView}
                BlockView={TestBlockView}
                FieldView={TestFieldView}/>);
            container.instance().onEvent(event,details);

            // Then
            expect(onEvent).toHaveBeenCalledWith(event, formModel, details);
        });

    });

});