import * as React from "react";

import {shallow} from "enzyme";
import {Provider} from "react-redux";
import {FormEngine} from "../../src/structure/FormEngine";
import {FormWrapper} from "../../src/structure/wrapper/FormWrapper";
import {dummyForm, emptyCallback, TestUtils} from "../TestUtils";
import {Form} from "../../src/definition/model/Form";
import {FieldViewProps} from "../../src/definition/view/FieldView";
import {BlockViewProps} from "../../src/definition/view/BlockView";
import {FormViewProps} from "../../src/definition/view/FormView";

TestUtils.init();

describe("FormEngine/Entry", () => {
    let TestBlockView = (p: BlockViewProps) => (<div>{p.children}</div>);
    let TestFieldView = (p: FieldViewProps) => (<div>{p.children}</div>);
    let FormView = (p: FormViewProps) => (<div>{p.children}</div>);

    describe("Form", () => {
        it("Should render Form", () => {
            let container = shallow(<FormEngine form={dummyForm}
                                                onEvent={emptyCallback}
                                                FormView={FormView}
                                                BlockView={TestBlockView}
                                                FieldView={TestFieldView}/>);
            expect(container.find(FormWrapper).length).toBe(1);
            expect(container.find(Provider).length).toBe(1);
        });
    });

});