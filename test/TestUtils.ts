// import {configure} from "enzyme/build/index";
import {Validation} from "../src/definition/validation/Validation";
import * as Adapter from 'enzyme-adapter-react-16'
import * as Enzyme from 'enzyme'

export const TestUtils = {
    init: () => {
        Enzyme.configure({
            adapter: new Adapter(),
        })
    }
};

export const ERROR = new Validation(false, "error-test");
