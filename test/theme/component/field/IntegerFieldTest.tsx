import * as React from "react";
import {mount, shallow} from "enzyme";
import {IntegerField} from "../../../../src/theme/component/field/IntegerField";
import {TestUtils} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {Field} from "../../../../src/definition/model/Field";
import {FIELD_EVENT} from "../../../../src/definition/event/events";
import {EMPTY_CALLBACK} from "../../../../src/definition/props-utils";

TestUtils.init();

describe("FormEngine/Field/NumericField", () => {
    let testId = "testId";
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_EMAIL,
    };

    describe("Construction", () => {
        it("Input should have type decimal", () => {
            let container = mount(<IntegerField field={field}
                                                onFieldEvent={TestUtils.emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find("input").props().inputMode).toBe("decimal");
        });
    });

    describe("Symbol", () => {
        it("Input should have no symbol by default", () => {
            let container = mount(<IntegerField field={field}
                                                onFieldEvent={TestUtils.emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find("TextField-symbol").length).toBe(0);
        });

        it("Input should symbol if specified", () => {
            let symbol = "%";
            let container = mount(<IntegerField field={{...field, symbol: symbol}}
                                                onFieldEvent={TestUtils.emptyCallback}
                                                contextValue={undefined}/>);
            expect(container.find(".TextField-symbol").length).toBe(1);
            expect(container.find(".TextField-symbol").text()).toEqual(symbol);
        });
    });

    describe("Value", () => {
        it("Should accept numbers", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<IntegerField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);
            let input = container.find('input');

            // When
            input.simulate('change', {target: {value: "1234"}});

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, 1234);
        });

        it("Should refuse other characters", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<IntegerField field={field}
                                                onFieldEvent={onFieldEvent}
                                                contextValue={undefined}/>);
            let input = container.find('input');

            // When
            input.simulate('change', {target: {value: "1234A"}});

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, 1234);
        });

        it("Should format value", () => {
            // Given
            let container = mount(<IntegerField field={field}
                                                onFieldEvent={TestUtils.emptyCallback}
                                                contextValue={1234}/>);
            let input = container.find('input');

            // Then
            expect(input.props().value).toBe((1234).toLocaleString("latn"));
        });
    });

});