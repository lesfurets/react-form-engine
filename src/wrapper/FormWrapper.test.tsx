import * as React from "react";

import {shallow} from "enzyme";
import {BlockWrapper} from "./BlockWrapper";
import {FormWrapper} from "./FormWrapper";
import {dummyForm, initTest, mockFormStore, mockThemeContext} from "../_tests_/TestUtils";
import {createStore} from "redux";
import reducer from "../definition/store/reducers";

initTest();

describe("FormEngine/Wrapper/FormWrapper", () => {
    let store = createStore(reducer);

    describe("Blocks", () => {
        it("Should render Blocks", () => {
            mockFormStore({});
            mockThemeContext();

            let container = shallow(<FormWrapper form={dummyForm}/>);

            expect(container.find(BlockWrapper).length).toBe(dummyForm.blocks.length);
        });
    });

});