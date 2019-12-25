import * as React from "react";

import {mount, shallow} from "enzyme";
import {BlockWrapper} from "../../../src/structure/wrapper/BlockWrapper";
import {FormWrapper} from "../../../src/structure/wrapper/FormWrapper";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {dummyForm, mockFormStore, mockThemeContext, TestUtils} from "../../TestUtils";
import {createStore} from "redux";
import reducer from "../../../src/redux/reducers";
import {Provider} from "react-redux";
import {DefaultBlockView} from "../../../src/theme/component/view/DefaultBlockView";

TestUtils.init();

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