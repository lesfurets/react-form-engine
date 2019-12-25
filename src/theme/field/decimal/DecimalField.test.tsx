import * as React from "react";
import {mount} from "enzyme";
import {DecimalField} from "./DecimalField";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {Field} from "../../../definition/model/Field";
import {FIELD_EVENT} from "../../../definition/event/events";

initTest();

describe("FormEngine/Field/NumericField", () => {
    let testId = "testId";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find("input").props().inputMode).toBe("decimal");
        });
    });

    describe("Symbol", () => {
        it("Input should have no symbol by default", () => {
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find("TextField-symbol").length).toBe(0);
        });

        it("Input should symbol if specified", () => {
            let symbol = "%";
            let container = mount(<DecimalField field={{...field, symbol: symbol}}
                                                onFieldEvent={emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find(".TextField-symbol").length).toBe(1);
            expect(container.find(".TextField-symbol").text()).toEqual(symbol);
        });
    });

    describe("Value", () => {
        it("Should accept numbers", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);
            let input = container.find('input');

            // When
            input.simulate('change', {target: {value: "1234"}});

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, 1234);
        });

        it("Should accept numbers with decimals", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);
            let input = container.find('input');

            // When
            input.simulate('change', {target: {value: "1234,56"}});

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, 1234.56);
        });

        it("Should refuse other characters", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);
            let input = container.find('input');

            // When
            input.simulate('change', {target: {value: "1234,56A"}});

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, 1234.56);
        });

        it("Should format value", () => {
            // Given
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={emptyCallback}
                                                contextValue={1234.56}/>);
            let input = container.find('input');

            // Then
            expect(input.props().value).toBe((1234.56).toLocaleString("latn"));
        });

        it("Should support unstable state with '.'", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);

            // When
            container.find('input').simulate('change', {target: {value: "1234,"}});

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input').props().value).toBe("1234,");
        });

        it("Should support unstable state with '0' in decimal", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DecimalField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);

            // When
            container.find('input').simulate('change', {target: {value: "1234,00"}});

            // Then
            expect(onFieldEvent).not.toHaveBeenCalled();
            expect(container.find('input').props().value).toBe("1234,00");
        });
    });

});