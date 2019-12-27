import * as React from "react";
import {mount, ReactWrapper} from "enzyme";
import {TextFieldComponent} from "./TextFieldComponent";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {FIELD_EVENT} from "../../../definition/event/events";
import {Field} from "../../../definition/model/Field";
import {FieldComponentProps} from "../../../definition/theme/field/FieldComponent";

initTest();

describe("FormEngine/Field/TextField", () => {
    let testValue = "testValue";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("Construction", () => {
        it("Input should have type text", () => {
            let container = mount(<TextFieldComponent field={field}
                                                      onFieldEvent={emptyCallback}
                                                      contextValue=""/>);
            expect(container.find("input").props().type).toBe("text");
            expect(container.find("input").props().inputMode).toBe("text");
        });
    });

    describe("placeholder", () => {
        it("Should have a placeholder", () => {
            let placeholderValue = "placeholder";
            let container = mount(<TextFieldComponent field={{...field, placeholder: placeholderValue}}
                                                      contextValue=""
                                                      onFieldEvent={emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe(placeholderValue)
        });


        it("Should have empty placeholder", () => {
            let container = mount(<TextFieldComponent field={field}
                                                      contextValue=""
                                                      onFieldEvent={emptyCallback}/>);
            expect(container.find('input').props().placeholder).toBe("")
        });
    });

    describe("props", () => {
        it("Should pass props id, name, tabindex to input", () => {
            let tabIndex = 8;
            let container = mount(<TextFieldComponent field={field}
                                                      tabIndex={tabIndex}
                                                      contextValue=""
                                                      onFieldEvent={emptyCallback}/>);
            expect(container.find('input').props().id).toBe(field.id);
            expect(container.find('input').props().name).toBe(field.id);
            expect(container.find('input').props().tabIndex).toBe(tabIndex);
        });
    });

    describe("onChange", () => {
        it("Should update value", () => {
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<TextFieldComponent field={field}
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
            let container = mount(<TextFieldComponent field={field}
                                                                                                                       contextValue={testValue}
                                                                                                                       onFieldEvent={onFieldEvent}/>);
            let input = container.find('input');
            input.simulate('blur');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testValue);
        });
    });

});