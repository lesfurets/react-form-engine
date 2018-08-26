import React from "react";
import {shallow} from "enzyme";
import {createStore} from "redux";
import reducer from "../src/redux/reducers";
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {Validation} from "../src/definition/validation/Validation";
import {EVENT_MULTICASTER} from "../src/definition/event/EventMulticaster";

export const initTest = () => {
    configure({adapter: new Adapter()});
};

export const mockPredicate = (predicate) => ({test: predicate});

export const EMPTY_CALLBACK = () => {};

export const ERROR = new Validation(false, "error-test");
