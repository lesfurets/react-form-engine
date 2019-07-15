import * as React from "react";
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import {TextField} from "../../../src/component/field/TextField";
import {TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {Field} from "../../../src/definition/model/Field";
import {FieldComponentProps} from "../../../src/definition/component/FieldComponent";
import {DateField} from "../../../src/component/field/DateField";

TestUtils.init();

describe("FormEngine/Field/DateField", () => {
    const field: Field = {
        id: "fieldId",
        type: FieldTypes.INPUT_TEXT,
    };

    describe("constructor", () => {
        it("Input should have type text", () => {
            let container = mount(<DateField field={field}
                                               onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find("input").length).toBe(3);
        });
    });

    describe("props", () => {
        it("Should have no initial value if contextValue is undefined", () => {
            let container = mount(<DateField field={field}
                                               onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find('.DateField-day').props().value).toBe("");
            expect(container.find('.DateField-month').props().value).toBe("");
            expect(container.find('.DateField-year').props().value).toBe("");
        });

        it("Should have initial value if contextValue is defined", () => {
            let year = 2000;
            let month = 1;
            let day = 1;
            let container = mount(<DateField field={field}
                                             contextValue={new Date(year, month - 1, day)}
                                             onFieldEvent={TestUtils.emptyCallback}/>);
            expect(container.find('.DateField-day').props().value).toBe(day.toString());
            expect(container.find('.DateField-month').props().value).toBe(month.toString());
            expect(container.find('.DateField-year').props().value).toBe(year.toString());
        });
    });
    //
    // describe("onChange", () => {
    //     it("Should update value", () => {
    //         let onFieldEvent = jasmine.createSpy();
    //         let container: ReactWrapper<FieldComponentProps<string>, any, React.Component> = mount(<TextField field={field}
    //                                                                                                               contextValue=""
    //                                                                                                               onFieldEvent={onFieldEvent}/>);
    //         let input = container.find('input');
    //         input.simulate('change', {target: {value: testValue}});
    //         expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, testValue);
    //         expect(onFieldEvent).not.toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testValue);
    //     });
    // });
    //
    // describe("onBlur", () => {
    //     it("Should submit value", () => {
    //         let onFieldEvent = jasmine.createSpy();
    //         let container: ReactWrapper<FieldComponentProps<string>, any, React.Component> = mount(<TextField field={field}
    //                                                                                                               contextValue={testValue}
    //                                                                                                               onFieldEvent={onFieldEvent}/>);
    //         let input = container.find('input');
    //         input.simulate('blur');
    //         expect(onFieldEvent).toHaveBeenCalledWith(FIELD_EVENT.SUMBIT_VALUE, testValue);
    //     });
    // });

});