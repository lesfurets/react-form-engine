import React from "react";
import {shallow} from "enzyme";
import {createStore} from "redux";
import reducer from "../src/redux/reducers";
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {Validation} from "../src/definition/validation";

export const createTestStore = () => new createStore(reducer);

export const initTest = () => configure({adapter: new Adapter()});

export const EMPTY_CALLBACK = () => {};

export const shallowRedux = (Component, props) => {
    let finalProps = {
        setFieldValue: EMPTY_CALLBACK,
        contextValue: "",
        ...props
    };
    shallow(<Component {...finalProps}/>);
}

export const ERROR = new Validation(false, "error-test");
