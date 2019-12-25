import * as React from "react";
import {mount} from "enzyme";
import {PLEASE_SELECT_UNDEFINED, SelectField} from "./SelectField";
import {initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {Field} from "../../../definition/model/Field";
import {FIELD_EVENT} from "../../../definition/event/events";

initTest();

describe("FormEngine/Field/SelectField", () => {
    let fieldValues = [
        {id:"value1",label:"value1"},
        {id:"value2",label:"value2"},
        {id:"value3",label:"value3"},
    ];
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_SELECT,
        values: fieldValues,
    };

    describe("Construction", () => {
        it("Select should have no value by default", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<SelectField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find("select").props().value).toBe(PLEASE_SELECT_UNDEFINED);
            expect(container.find(`option[value="${PLEASE_SELECT_UNDEFINED}"]`).length).toBe(1);
        });

        it("Select should reload context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let contextValue = fieldValues[0];
            let container = mount(<SelectField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={contextValue.id}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find("select").props().value).toBe(contextValue.id);
        });

        it("Select should have defaultValue if no context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = fieldValues[0];
            let container = mount(<SelectField field={{...field, defaultValue:defaultValue}}
                                                                               onFieldEvent={onFieldEvent}
                                                                               contextValue={undefined}/>);

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, defaultValue.id);
            expect(container.find(`option[value="${PLEASE_SELECT_UNDEFINED}"]`).length).toBe(0);
        });

        it("Select should not have defaultValue if there is a context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = fieldValues[0];
            let contextValue = fieldValues[1];
            let container = mount(<SelectField field={{...field, defaultValue:defaultValue}}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={contextValue.id}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find("select").props().value).toBe(contextValue.id);
        });

        it("Select should have all required values", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<SelectField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);

            // Then
            expect(container.find("option").length).toBe(4);
        });
    });

    describe("onChange", () => {
        it("Should submit value on change", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let value = fieldValues[0];
            let container = mount(<SelectField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);
            // Then
            let select = container.find('select');
            select.simulate('change', {target: {value: value.id}});
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, value.id);
        });

        it("Should reset value on default", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<SelectField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);
            // Then
            let select = container.find('select');
            select.simulate('change', {target: {value: PLEASE_SELECT_UNDEFINED}});
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.RESET_VALUE);
        });
    });

});