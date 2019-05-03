import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import {TextField, TextFieldProps, TextFieldState} from "../../../src/component/field/TextField";
import {TestUtils} from "../../TestUtils";
import {Field} from "../../../src/definition/FormModel";
import {FieldTypes} from "../../../src/definition/FieldTypes";

TestUtils.init();

describe("FormEngine/Field/TextField", () => {
    let testValue = "testValue";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("Construction", () => {
        it("Input should have type text", () => {
            let container = shallow(<TextField field={field}
                                               onValueChange={TestUtils.emptyCallback}
                                               contextValue=""/>);
            expect(container.find("input").props().type).toBe("text");
            expect(container.find("input").props().inputMode).toBe("text");
        });
    });

    describe("placeholder", () => {
        it("Should have a placeholder", () => {
            let placeholderValue = "placeholder";
            let container = shallow(<TextField field={{...field, placeholder: placeholderValue}}
                                               contextValue=""
                                               onValueChange={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe(placeholderValue)
        });


        it("Should have empty placeholder", () => {
            let container = shallow(<TextField field={field}
                                               contextValue=""
                                               onValueChange={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe("")
        });
    });

    describe("props", () => {
        it("Should pass props id, name, tabindex to input", () => {
            let tabIndex = 8;
            let container = shallow(<TextField field={field}
                                               tabIndex={tabIndex}
                                               contextValue=""
                                               onValueChange={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().id).toBe(field.id);
            expect(container.find('input').props().name).toBe(field.id);
            expect(container.find('input').props().tabIndex).toBe(tabIndex);
        });
    });

    describe("onChange", () => {
        it("Should update only state", () => {
            let onValueChange = jasmine.createSpy();
            let container: ShallowWrapper<TextFieldProps, TextFieldState, React.Component> = shallow(<TextField field={field}
                                               contextValue=""
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
            let container: ShallowWrapper<TextFieldProps, TextFieldState, React.Component> = shallow(<TextField field={field}
                                               contextValue=""
                                               onValueChange={onValueChange}/>);
            let input = container.find('input');
            input.simulate('change', {target: {value: testValue}});
            input.simulate('blur');
            expect(container.state().value).toBe(testValue);
            expect(onValueChange).toHaveBeenCalledWith(testValue);
        });
    });

});