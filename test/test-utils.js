import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {Validation} from "../src/definition/validation/Validation";

export const initTest = () => {
    configure({adapter: new Adapter()});
};

export const ERROR = new Validation(false, "error-test");
