import * as React from "react";
import {mount} from "enzyme";
import {CheckboxField} from "./CheckboxField";
import {initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {Field} from "../../../definition/model/Field";
import {FIELD_EVENT} from "../../../definition/event/events";

initTest();

describe("FormEngine/Field/CheckboxField", () => {
    let fieldValues = [
        {id:"value1",label:"value1"},
        {id:"value2",label:"value2"},
        {id:"value3",label:"value3"},
    ];
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_CHECKBOX,
        values: fieldValues,
    };

    describe("Construction", () => {
        it("Select should have no value by default", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<CheckboxField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').length).toBe(0);
            expect(container.find(".CheckboxField-value.checked").length).toBe(0);
        });

        it("Select should reload context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let contextValue = fieldValues[0];
            let container = mount(<CheckboxField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={[contextValue.id]}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').props().value).toBe(contextValue.id);
        });

        it("Select should reload context values", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let contextValue1 = fieldValues[0];
            let contextValue2 = fieldValues[1];
            let container = mount(<CheckboxField field={field}
                                                 onFieldEvent={onFieldEvent}
                                                 contextValue={[contextValue1.id, contextValue2.id]}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').length).toBe(2);
            expect(container.find(`input[checked=true][value="${contextValue1.id}"]`).length).toBe(1);
            expect(container.find(`input[checked=true][value="${contextValue2.id}"]`).length).toBe(1);
        });

        it("Select should have defaultValue if no context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = [fieldValues[0]];
            let container = mount(<CheckboxField field={{...field, defaultValue:defaultValue}}
                                                                               onFieldEvent={onFieldEvent}
                                                                               contextValue={undefined}/>);

            // Then
            container.update();
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, defaultValue.map(value => value.id));
        });

        it("Select should not have defaultValue if there is a context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = fieldValues[0];
            let contextValue = fieldValues[1];
            let container = mount(<CheckboxField field={{...field, defaultValue:defaultValue}}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={[contextValue.id]}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').props().value).toBe(contextValue.id);
        });

        it("Select should have all required values", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<CheckboxField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);

            // Then
            expect(container.find("input").length).toBe(3);
        });
    });

    describe("onChange", () => {

        it("Should submit value on change", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let value = fieldValues[0];
            let container = mount(<CheckboxField field={field}
                                                 onFieldEvent={onFieldEvent}
                                                 contextValue={undefined}/>);
            // Then
            container.find(`input[value="${value.id}"]`).simulate('change');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, [value.id]);
        });

        it("Should remove value on second change", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let value1 = fieldValues[0];
            let value2 = fieldValues[1];
            let container = mount(<CheckboxField field={field}
                                                 onFieldEvent={onFieldEvent}
                                                 contextValue={[value1.id, value2.id]}/>);
            // Then
            container.find(`input[value="${value2.id}"]`).simulate('change');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, [value1.id]);
        });

        it("Should reset value on second change", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let value = fieldValues[0];
            let container = mount(<CheckboxField field={field}
                                                 onFieldEvent={onFieldEvent}
                                                 contextValue={[value.id]}/>);
            // Then
            container.find(`input[value="${value.id}"]`).simulate('change');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.RESET_VALUE);
        });
    });

});