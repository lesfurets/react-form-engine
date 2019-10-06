import * as React from "react";

import {shallow} from "enzyme";
import {Provider} from "react-redux";
import {FormEngine} from "../../src/structure/FormEngine";
import {FormWrapper} from "../../src/structure/wrapper/FormWrapper";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {EventCallBack} from "../../src/definition/event/EventMulticaster";
import {TestUtils} from "../TestUtils";
import {Form} from "../../src/definition/model/Form";
import {FieldViewProps} from "../../src/definition/view/FieldView";
import {BlockViewProps} from "../../src/definition/view/BlockView";
import {FormViewProps} from "../../src/definition/view/FormView";

TestUtils.init();

describe("FormEngine/Entry", () => {
    let emptyCallback : EventCallBack = (event, source) => {};

    let TestBlockView = (p: BlockViewProps) => (<div>{p.children}</div>);
    let TestFieldView = (p: FieldViewProps) => (<div>{p}</div>);
    let FormView = (p: FormViewProps) => (<div>{p}</div>);

    let formModel: Form = {
        id: "",
        label: "",
        blocks: [
            {id: "block1", label: "", index: 0, fields: [{id: 'testChild1', type: FieldTypes.INPUT_TEXT}]},
            {id: "block2", label: "", index: 0, fields: [{id: 'testChild2', type: FieldTypes.INPUT_TEXT}]}
        ]
    };

    describe("Form", () => {
        it("Should render Form", () => {
            let container = shallow(<FormEngine
                form={formModel}
                onEvent={emptyCallback}
                FormView={FormView}
                BlockView={TestBlockView}
                FieldView={TestFieldView}/>);
            expect(container.find(FormWrapper).length).toBe(1);
            expect(container.find(Provider).length).toBe(1);
        });
    });

});