import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import {TextField, TextFieldProps, TextFieldState} from "../../../src/component/field/TextField";
import {TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {Field} from "../../../src/definition/model/Field";

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
                                               onFieldEvent={TestUtils.emptyCallback}
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
                                               onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe(placeholderValue)
        });


        it("Should have empty placeholder", () => {
            let container = shallow(<TextField field={field}
                                               contextValue=""
                                               onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe("")
        });
    });

    describe("props", () => {
        it("Should pass props id, name, tabindex to input", () => {
            let tabIndex = 8;
            let container = shallow(<TextField field={field}
                                               tabIndex={tabIndex}
                                               contextValue=""
                                               onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find('input').props().id).toBe(field.id);
            expect(container.find('input').props().name).toBe(field.id);
            expect(container.find('input').props().tabIndex).toBe(tabIndex);
        });
    });

    describe("onChange", () => {
        it("Should update value", () => {
            let onFieldEvent = jasmine.createSpy();
            let container: ShallowWrapper<TextFieldProps, TextFieldState, React.Component> = shallow(<TextField field={field}
                                               contextValue=""
                                               onFieldEvent={onFieldEvent}/>);
            let input = container.find('input');
            input.simulate('change', {target: {value: testValue}});
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, testValue);
            expect(onFieldEvent).not.toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testValue);
        });
    });

    describe("onBlur", () => {
        it("Should submit value", () => {
            let onFieldEvent = jasmine.createSpy();
            let container: ShallowWrapper<TextFieldProps, TextFieldState, React.Component> = shallow(<TextField field={field}
                                               contextValue={testValue}
                                               onFieldEvent={onFieldEvent}/>);
            let input = container.find('input');
            input.simulate('blur');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testValue);
        });
    });

});