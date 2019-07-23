import * as React from "react";
import {mount, ReactWrapper} from "enzyme";
import {TestUtils} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {FIELD_EVENT} from "../../../../src/definition/event/events";
import {Field} from "../../../../src/definition/model/Field";
import {FieldComponentProps} from "../../../../src/definition/component/FieldComponent";
import {DateField} from "../../../../src/component/field/DateField";
import {act} from "react-dom/test-utils";
import {DateElement} from "../../../../src/component/field/element/DateElement";

TestUtils.init();

describe("FormEngine/Field/DateField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_DATE,
    };

    const year = 2000;
    const month = 1;
    const date = 1;

    let tabIndex = 2;
    let size = 4;
    let type = "testType";
    let value = 10;
    let id = "testId";
    let onValueChange = () => "";
    let formatValue = (value: number) => value.toString();

    let defaultProps = {tabIndex, size, type, value, id, onValueChange, formatValue};

    describe("constructor", () => {
        it("Input should have static attributes", () => {
            // Given
            let container = mount(<DateElement {...defaultProps}/>);

            // Then
            let inputElement = container.find("input");
            expect(inputElement.length).toBe(1);

            expect(inputElement.props().value).toBe(value.toString());

            expect(inputElement.props().id).toBe(id);
            expect(inputElement.props().name).toBe(id);

            expect(inputElement.props().size).toBe(size);
            expect(inputElement.props().maxLength).toBe(size);

            expect(inputElement.props().tabIndex).toBe(tabIndex);

            expect(inputElement.props().className).toBe(`DateField-${type.toLowerCase()}`);
        });

        it("Input should manage undefined value", () => {
            let container = mount(<DateElement {...defaultProps}
                                               value={undefined}/>);

            expect(container.find("input").props().value).toBe("");
        });
    });

    describe("onChange", () => {
        it("Should update value", () => {
            // Given
            let value = 2;
            let onValueChange = jasmine.createSpy();
            let container = mount(<DateElement {...defaultProps} onValueChange={onValueChange}/>);

            // When
            act(() => {
                container.find("input").simulate("change", {target: {value: value.toString()}});
            });

            // Then
            expect(onValueChange).toHaveBeenCalledWith(value);
        });

        it("Should reset value", () => {
            // Given
            let value = "";
            let onValueChange = jasmine.createSpy();
            let container = mount(<DateElement {...defaultProps} onValueChange={onValueChange}/>);

            // When
            act(() => {
                container.find("input").simulate("change", {target: {value: value.toString()}});
            });

            // Then
            expect(onValueChange).toHaveBeenCalledWith(undefined);
        });
    });

    describe("formatValue", () => {
        it("Should formatValue on constructor", () => {
            // Given
            let formatedValue = "02";
            let formatValue = jasmine.createSpy().and.returnValue(formatedValue);
            let container = mount(<DateElement {...defaultProps} formatValue={formatValue}/>);

            // Then
            expect(formatValue).toHaveBeenCalledWith(value);
            expect(container.find("input").props().value).toBe(formatedValue);
        });

        it("Should formatValue on focusOut", () => {
            // Given
            let formatedValue = "02";
            let formatValue = jasmine.createSpy().and.returnValue(formatedValue);
            let container = mount(<DateElement {...defaultProps} formatValue={formatValue}/>);

            // When
            act(() => {
                container.find("input").simulate("blur");
            });

            // Then
            expect(formatValue).toHaveBeenCalledWith(value);
            expect(formatValue).toHaveBeenCalledTimes(3);
            expect(container.find("input").props().value).toBe(formatedValue);
        });
    });

});