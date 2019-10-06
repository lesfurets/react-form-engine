import * as React from "react";
import {mount} from "enzyme";
import {TestUtils} from "../../../TestUtils";
import {FieldTypes} from "../../../../src/definition/FieldTypes";
import {FIELD_EVENT} from "../../../../src/definition/event/events";
import {Field} from "../../../../src/definition/model/Field";
import {DateField, DateInfo, formatDayMonth, formatYear} from "../../../../src/theme/component/field/DateField";
import {act} from "react-dom/test-utils";
import {DateElement} from "../../../../src/theme/component/field/element/DateElement";

TestUtils.init();

describe("FormEngine/Field/DateField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_DATE,
    };

    const year = 2000;
    const month = 1;
    const date = 1;
    const testDate = new Date(year, month - 1, date);

    describe("constructor", () => {
        it("Input should have type text", () => {
            let container = mount(<DateField field={field}
                                             onFieldEvent={TestUtils.emptyCallback}/>);

            expect(container.find(DateElement).length).toBe(3);
        });
    });

    describe("props", () => {
        it("Should use right formater", () => {
            let container = mount(<DateField field={field}
                                             onFieldEvent={TestUtils.emptyCallback}/>);

            expect(container.find(DateElement)
                .findWhere(container => container.key() === DateInfo.DAY)
                .props().formatValue).toBe(formatDayMonth);
            expect(container.find(DateElement)
                .findWhere(container => container.key() === DateInfo.MONTH)
                .props().formatValue).toBe(formatDayMonth);
            expect(container.find(DateElement)
                .findWhere(container => container.key() === DateInfo.YEAR)
                .props().formatValue).toBe(formatYear);
        });

        it("Should have no initial value if contextValue is undefined", () => {
            let container = mount(<DateField field={field}
                                             onFieldEvent={TestUtils.emptyCallback}/>);

            expect(container.find('.DateField-day').props().value).toBe("");
            expect(container.find('.DateField-month').props().value).toBe("");
            expect(container.find('.DateField-year').props().value).toBe("");
        });

        it("Should have initial value if contextValue is defined", () => {
            // When
            let container = mount(<DateField field={field}
                                             contextValue={testDate}
                                             onFieldEvent={TestUtils.emptyCallback}/>);

            // Then
            expect(container.find('.DateField-day').props().value).toBe(formatDayMonth(date));
            expect(container.find('.DateField-month').props().value).toBe(formatDayMonth(month));
            expect(container.find('.DateField-year').props().value).toBe(formatDayMonth(year));
        });
    });

    describe("onChange", () => {
        it("Should update value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DateField field={field} onFieldEvent={onFieldEvent}/>);

            // When
            act(() => {
                container.find(".DateField-day").simulate("change", {target: {value: formatDayMonth(date)}});
            });
            act(() => {
                container.find(".DateField-month").simulate("change", {target: {value: formatDayMonth(month)}});
            });
            act(() => {
                container.find(".DateField-year").simulate("change", {target: {value: formatYear(year)}});
            });

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testDate);
            expect(onFieldEvent).not.toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, testDate);
        });

        it("Should reset value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DateField field={field} onFieldEvent={onFieldEvent} contextValue={testDate}/>);

            // When
            act(() => {
                container.find(".DateField-year").simulate("change", {target: {value: ""}});
            });

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.RESET_VALUE);
        });
    });

    describe("format", () => {
        it("Should format day and month", () => {
            expect(formatDayMonth(1)).toBe("01");
            expect(formatDayMonth(12)).toBe("12");
        });

        it("Should format year", () => {
            expect(formatYear(0)).toBe("2000");
            expect(formatYear(1)).toBe("2001");
            expect(formatYear(80)).toBe("1980");
            expect(formatYear(180)).toBe("180");
            expect(formatYear(2000)).toBe("2000");
            expect(formatYear(1976)).toBe("1976");
        });

    });

});