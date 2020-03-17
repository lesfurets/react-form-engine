import * as React from "react";
import {mount, ReactWrapper} from "enzyme";
import {TextAreaFieldComponent} from "./TextAreaFieldComponent";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {FieldComponentEvents, FieldEvents} from "../../../definition/event/events";
import {Field} from "../../../definition/model/Field";
import {FieldComponentProps} from "../../../definition/theme/field/FieldComponent";
import {TextField} from "../../../definition/model/fields/TextField";

initTest();

describe("FormEngine/Field/TextAreaField", () => {
    let testValue = "testValue";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT_AREA,
    };

    describe("placeholder", () => {
        it("Should have a placeholder", () => {
            let placeholderValue = "placeholder";
            let container = mount(<TextAreaFieldComponent field={{...field, placeholder: placeholderValue}}
                                                          contextValue=""
                                                          onFieldEvent={emptyCallback}/>);
            expect(container.find('textarea').props().placeholder).toBe(placeholderValue)
        });


        it("Should have empty placeholder", () => {
            let container = mount(<TextAreaFieldComponent field={field}
                                                          contextValue=""
                                                          onFieldEvent={emptyCallback}/>);
            expect(container.find('textarea').props().placeholder).toBe("")
        });
    });

    describe("props", () => {
        it("Should pass props id, name, tabindex to input", () => {
            let tabIndex = 8;
            let container = mount(<TextAreaFieldComponent field={field}
                                                          tabIndex={tabIndex}
                                                          contextValue=""
                                                          onFieldEvent={emptyCallback}/>);
            expect(container.find('textarea').props().id).toBe(field.id);
            expect(container.find('textarea').props().name).toBe(field.id);
            expect(container.find('textarea').props().tabIndex).toBe(tabIndex);
        });
    });

    describe("onChange", () => {
        it("Should update value", () => {
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<TextAreaFieldComponent field={field}
                                                                                                                           contextValue=""
                                                                                                                           onFieldEvent={onFieldEvent}/>);
            let input = container.find('textarea');
            input.simulate('change', {target: {value: testValue}});
            expect(onFieldEvent).toHaveBeenCalledWith(FieldComponentEvents.UPDATE_VALUE, testValue);
            expect(onFieldEvent).not.toHaveBeenCalledWith(FieldComponentEvents.SUMBIT_VALUE, testValue);
        });
    });

    describe("onBlur", () => {
        it("Should submit value", () => {
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<TextAreaFieldComponent field={field}
                                                                                                                           contextValue={testValue}
                                                                                                                           onFieldEvent={onFieldEvent}/>);
            let input = container.find('textarea');
            input.simulate('blur');
            expect(onFieldEvent).toHaveBeenCalledWith(FieldComponentEvents.SUMBIT_VALUE, testValue);
        });
    });

});