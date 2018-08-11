import React from "react";
import {createStore} from "redux";
import ResponsiveContainer from "react-responsive-widget";

import {shallow} from "enzyme";
import reducer from "../../src/redux/reducers";
import {initTest} from "../../test/test-utils";
import {Provider} from "react-redux";
import FormEngine from "../../src/component/FormEngine";
import FormWrapper from "../../src/component/wrapper/FormWrapper";

initTest();

describe("FormEngine/Entry", () => {
    let emptyCallback = () => {
    };

    let TestView = ({children}) => (<div>{children}</div>);

    let store = createStore(reducer);

    let formModel = [
        {id: "block1", fields: [{id: 'testChild1', type: 'type-test'}]},
        {id: "block2", fields: [{id: 'testChild2', type: 'type-test'}]}
    ];

    describe("Form", () => {
        it("Should render Form", () => {
            let container = shallow(<FormEngine
                form={formModel}
                onEvent={emptyCallback}
                View={TestView}
                BlockView={TestView}
                FieldView={TestView}/>);
            expect(container.find(FormWrapper).length).toBe(1);
            expect(container.find(Provider).length).toBe(1);
            expect(container.find(ResponsiveContainer).length).toBe(1);
        });
    });

});