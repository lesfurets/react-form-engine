import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../src/redux/reducers";
import {setFieldValueAction} from "../src/redux/actions";
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {Validation} from "../src/definition/validation";

export const createTestStore = () => new createStore(reducer);

export const initTest = () => configure({adapter: new Adapter()});


export const mountInRedux = (Component, props, store) => mount(
    <Provider store={store || new createStore(reducer)}>
        <Component {...props}/>
    </Provider>
);


export const setFieldValue = (id, value, store) => {
  store.dispatch(setFieldValueAction(id, value));
};



export const ERROR = new Validation(false, "error-test");
