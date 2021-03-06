import * as React from "react";
import {mount, ReactWrapper} from "enzyme";
import {emptyCallback, initTest} from "../../../_tests_/TestUtils";
import {FieldTypes} from "../../../definition/FieldTypes";
import {FieldComponentEvents} from "../../../definition/event/events";
import {DateFieldComponent, DateInfo, formatDayMonth, formatYear} from "./DateFieldComponent";
import {act} from "react-dom/test-utils";
import {DateElement, DateElementProps} from "./element/DateElement";
import {DateField} from "../../../definition/model/fields/DateField";

initTest();

describe("FormEngine/Field/DateField", () => {
    const field: DateField = {
        id: "fieldId",
        type: FieldTypes.INPUT_DATE,
    };

    const year = 2000;
    const month = 1;
    const date = 1;
    const testDate = new Date(year, month - 1, date);

    describe("constructor", () => {
        it("Input should have type text", () => {
            let container = mount(<DateFieldComponent field={field}
                                                      onFieldEvent={emptyCallback}/>);

            expect(container.find(DateElement).length).toBe(3);
        });
    });

    describe("props", () => {
        it("Should use right formater", () => {
            let container = mount(<DateFieldComponent field={field}
                                                      onFieldEvent={emptyCallback}/>);

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
            let container = mount(<DateFieldComponent field={field}
                                                      onFieldEvent={emptyCallback}/>);

            expect(container.find('.DateField-day').props().value).toBe("");
            expect(container.find('.DateField-month').props().value).toBe("");
            expect(container.find('.DateField-year').props().value).toBe("");
        });

        it("Should have initial value if contextValue is defined", () => {
            // When
            let container = mount(<DateFieldComponent field={field}
                                                      contextValue={testDate}
                                                      onFieldEvent={emptyCallback}/>);

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
            let container = mount(<DateFieldComponent field={field} onFieldEvent={onFieldEvent}/>);

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
            expect(onFieldEvent).toHaveBeenCalledWith(FieldComponentEvents.SUMBIT_VALUE, testDate);
            expect(onFieldEvent).not.toHaveBeenCalledWith(FieldComponentEvents.UPDATE_VALUE, testDate);
        });

        it("Should reset value", () => {
            // Given
            let onFieldEvent = jasmine.createSpy();
            let container = mount(<DateFieldComponent field={field} onFieldEvent={onFieldEvent} contextValue={testDate}/>);

            // When
            act(() => {
                container.find(".DateField-year").simulate("change", {target: {value: ""}});
            });

            // Then
            expect(onFieldEvent).toHaveBeenCalledWith(FieldComponentEvents.RESET_VALUE);
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

    describe("focus", () => {
        it("Should have no focus by default", () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;
            expect(dayElement.props().forceFocus).toBe(false);
            expect(monthElement.props().forceFocus).toBe(false);
            expect(yearElement.props().forceFocus).toBe(false);
        });

        it("Should focus on day on a click on the component", async () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // When
            act(() => {
                container.find(".DateField-container").simulate("click");
            });
            container.update();

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;

            expect(dayElement.props().forceFocus).toBe(true);
            expect(monthElement.props().forceFocus).toBe(false);
            expect(yearElement.props().forceFocus).toBe(false);
        });

        it("Should focus on month when submitting day", async () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // When
            act(() => {
                container.find(".DateField-day").simulate("change", {target: {value: formatDayMonth(date)}});
            });
            container.update();

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;

            expect(dayElement.props().forceFocus).toBe(false);
            expect(monthElement.props().forceFocus).toBe(true);
            expect(yearElement.props().forceFocus).toBe(false);
        });

        it("Should focus on year when submitting month", async () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // When
            act(() => {
                container.find(".DateField-month").simulate("change", {target: {value: formatDayMonth(month)}});
            });
            container.update();

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;

            expect(dayElement.props().forceFocus).toBe(false);
            expect(monthElement.props().forceFocus).toBe(false);
            expect(yearElement.props().forceFocus).toBe(true);
        });

        it("Should focus on month when resetting year", async () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // When
            act(() => {
                container.find(".DateField-year").simulate("keydown", {key : 'Backspace'});
            });
            container.update();

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;

            expect(dayElement.props().forceFocus).toBe(false);
            expect(monthElement.props().forceFocus).toBe(true);
            expect(yearElement.props().forceFocus).toBe(false);
        });

        it("Should focus on day when resetting month", async () => {
            // Given
            let container = mount(<DateFieldComponent field={field} onFieldEvent={emptyCallback}/>);

            // When
            act(() => {
                container.find(".DateField-month").simulate("keydown", {key : 'Backspace'});
            });
            container.update();

            // Then
            let dayElement = container.find({type: DateInfo.DAY}) as ReactWrapper<DateElementProps>;
            let monthElement = container.find({type: DateInfo.MONTH}) as ReactWrapper<DateElementProps>;
            let yearElement = container.find({type: DateInfo.YEAR}) as ReactWrapper<DateElementProps>;

            expect(dayElement.props().forceFocus).toBe(true);
            expect(monthElement.props().forceFocus).toBe(false);
            expect(yearElement.props().forceFocus).toBe(false);
        });
    });
    //TODO Test Focus

});