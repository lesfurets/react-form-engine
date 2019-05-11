import * as React from "react";
import ResponsiveContainer from "react-responsive-widget";

import {shallow} from "enzyme";
import {Provider} from "react-redux";
import FormEngine from "../../src/component/FormEngine";
import FormWrapper from "../../src/component/wrapper/FormWrapper";
import {BlockViewProps} from "../../src/component/view/BlockView";
import {FieldTypes} from "../../src/definition/FieldTypes";
import {FormViewProps} from "../../src/component/view/FormView";
import {EventCallBack} from "../../src/definition/event/EventMulticaster";
import {TestUtils} from "../TestUtils";
import {Form} from "../../src/definition/model/Form";
import {FieldViewProps} from "../../src/definition/view/FieldView";

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
            expect(container.find(ResponsiveContainer).length).toBe(1);
        });
    });

});