import * as React from "react";

import {shallow} from "enzyme";
import {FormEngine} from "./FormEngine";
import {FormWrapper} from "../wrapper/FormWrapper";
import {dummyForm, emptyCallback, initTest} from "../_tests_/TestUtils";
import {Form} from "../definition/model/Form";
import {FieldViewProps} from "../definition/theme/view/FieldView";
import {BlockViewProps} from "../definition/theme/view/BlockView";
import {FormViewProps} from "../definition/theme/view/FormView";

initTest();

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
        });
    });

});