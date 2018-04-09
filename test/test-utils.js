import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../src/redux/reducers";
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {Validation} from "../src/definition/validation";

let store = createStore(reducer);

export const initTest = () => configure({adapter: new Adapter()});


export const mountInRedux = (Component, props) => mount(
    <Provider store={store}>
        <Component {...props}/>
    </Provider>
);

export const ERROR = new Validation(false, "error-test");
