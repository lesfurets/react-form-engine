import React from "react";
import {shallow} from "enzyme";
import {TextField} from "../../../src/component/fields/TextField";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Fields/TextField", () => {
    let testId = "testId";
    let testValue = "testValue";
    let emptyCallback = () => {
    };

    describe("Construction", () => {
        it("Input should have type text", () => {
            let container = shallow(<TextField field={{id: testId}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}
                                               fieldContext={{}}/>);
            expect(container.find("input").props().type).toBe("text");
            expect(container.find("input").props().inputMode).toBe("text");
        });
    });

    describe("placeholder", () => {
        it("Should have a placeholder", () => {
            let placeholderValue = "placeholder";
            let container = shallow(<TextField field={{id: "test", placeholder: placeholderValue}}
                                               fieldContext={{}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe(placeholderValue)
        });


        it("Should have empty placeholder", () => {
            let container = shallow(<TextField field={{id: "test"}}
                                               fieldContext={{}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe("")
        });
    });

    describe("props", () => {
        it("Should pass props id, name, tabindex to input", () => {
            let tabIndex = 8;
            let container = shallow(<TextField field={{id: testId}}
                                               tabIndex={tabIndex}
                                               fieldContext={{}}
                                               helperContext={{}}
                                               onValueChange={emptyCallback}/>);
            expect(container.find('input').props().id).toBe(testId);
            expect(container.find('input').props().name).toBe(testId);
            expect(container.find('input').props().tabIndex).toBe(tabIndex);
        });
    });

    describe("onChange", () => {
        it("Should update only state", () => {
            let onValueChange = jasmine.createSpy();
            let container = shallow(<TextField field={{id: testId}}
                                               fieldContext={{}}
                                               helperContext={{}}
                                               onValueChange={onValueChange}/>);
            let input = container.find('input');
            input.simulate('change', {target: {value: testValue}});
            expect(container.state().value).toBe(testValue);
            expect(onValueChange).not.toHaveBeenCalled();
        });
    });

    describe("onBlur", () => {
        it("Should update state and onValueChange", () => {
            let onValueChange = jasmine.createSpy();
            let container = shallow(<TextField field={{id: testId}}
                                               fieldContext={{}}
                                               helperContext={{}}
                                               onValueChange={onValueChange}/>);
            let input = container.find('input');
            input.simulate('change', {target: {value: testValue}});
            input.simulate('blur');
            expect(container.state().value).toBe(testValue);
            expect(onValueChange).toHaveBeenCalledWith(testValue);
        });
    });

});