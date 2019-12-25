import * as React from "react";

import {shallow} from "enzyme";
import {BlockWrapper} from "../../../src/structure/wrapper/BlockWrapper";
import {FormWrapper} from "../../../src/structure/wrapper/FormWrapper";
import {dummyForm, initTest, mockFormStore, mockThemeContext} from "../../TestUtils";
import {createStore} from "redux";
import reducer from "../../../src/redux/reducers";

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