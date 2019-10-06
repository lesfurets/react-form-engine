import * as React from "react";
import {mount} from "enzyme";
import {RadioField} from "../../../../src/theme/component/field/RadioField";
import {TestUtils} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Field} from "../../../../src/definition/model/Field";
import {FIELD_EVENT} from "../../../../src/definition/event/events";

TestUtils.init();

describe("FormEngine/Field/RadioField", () => {
    let fieldValues = [
        {id:"value1",label:"value1"},
        {id:"value2",label:"value2"},
        {id:"value3",label:"value3"},
    ];
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_RADIO,
        values: fieldValues,
    };

    describe("Construction", () => {
        it("Select should have no value by default", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<RadioField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={undefined}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').length).toBe(0);
            expect(container.find(".RadioField-value.checked").length).toBe(0);
        });

        it("Select should reload context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let contextValue = fieldValues[0];
            let container = mount(<RadioField field={field}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={contextValue.id}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').props().value).toBe(contextValue.id);
        });

        it("Select should have defaultValue if no context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = fieldValues[0];
            let container = mount(<RadioField field={{...field, defaultValue:defaultValue}}
                                                                               onFieldEvent={onFieldEvent}
                                                                               contextValue={undefined}/>);

            // Then
            container.update();
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, defaultValue.id);
        });

        it("Select should not have defaultValue if there is a context value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let defaultValue = fieldValues[0];
            let contextValue = fieldValues[1];
            let container = mount(<RadioField field={{...field, defaultValue:defaultValue}}
                                               onFieldEvent={onFieldEvent}
                                               contextValue={contextValue.id}/>);

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input[checked=true]').props().value).toBe(contextValue.id);
        });

        it("Select should have all required values", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<RadioField field={field}
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
            let container = mount(<RadioField field={field}
                                              onFieldEvent={onFieldEvent}
                                              contextValue={undefined}/>);
            // Then
            let label = container.find(`input[value="${value.id}"]`);
            label.simulate('change');
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, value.id);
        });
    });

});