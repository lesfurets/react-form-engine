import * as React from "react";

import {shallow} from "enzyme";
import {BlockWrapper} from "./BlockWrapper";
import {FormWrapper} from "./FormWrapper";
import {dummyForm, initTest, mockFormStore, mockNavigationStore, mockThemeContext} from "../_tests_/TestUtils";

initTest();

describe("FormEngine/Wrapper/FormWrapper", () => {
    describe("Blocks", () => {
        it("Should render Blocks", () => {
            mockFormStore({});
            mockNavigationStore(dummyForm.blocks[0]);
            mockThemeContext();

            let container = shallow(<FormWrapper form={dummyForm}/>);

            expect(container.find(BlockWrapper).length).toBe(dummyForm.blocks.length);
        });
    });

});