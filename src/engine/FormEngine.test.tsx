import * as React from "react";

import {shallow} from "enzyme";
import {FormEngine} from "./FormEngine";
import {FormWrapper} from "../wrapper/FormWrapper";
import {dummyForm, emptyCallback, initTest} from "../_tests_/TestUtils";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/theme/view/FieldView";
import {BlockView} from "../definition/theme/view/BlockView";
import {FormView} from "../definition/theme/view/FormView";

initTest();

describe("FormEngine/Entry", () => {
    let TestBlockView: BlockView = ({children}) => (<div>{children}</div>);
    let TestFieldView: FieldView = ({children}) => (<div>{children}</div>);
    let TestFormView: FormView = ({children}) => (<div>{children}</div>);

    describe("Form", () => {
        it("Should render Form", () => {
            let container = shallow(<FormEngine form={dummyForm}
                                                onEvent={emptyCallback}
                                                FormView={TestFormView}
                                                BlockView={TestBlockView}
                                                FieldView={TestFieldView}/>);
            expect(container.find(FormWrapper).length).toBe(1);
        });
    });

});