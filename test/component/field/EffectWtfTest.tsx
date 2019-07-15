import * as React from "react";
import {mount, ReactWrapper, shallow, ShallowWrapper} from "enzyme";
import {TextField} from "../../../src/component/field/TextField";
import {TestUtils} from "../../TestUtils";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {Field} from "../../../src/definition/model/Field";
import {FieldComponentProps} from "../../../src/definition/component/FieldComponent";
import {DateField} from "../../../src/component/field/DateField";
import anything = jasmine.anything;
import {EffectWtf} from "../../../src/component/field/EffectWtf";
import {act} from "react-dom/test-utils";

TestUtils.init();

describe("FormEngine/Field/DateField", () => {
    describe("onChange", () => {
        it("Should update value", () => {
            // Given
            let callback = jasmine.createSpy();
            let container: ReactWrapper<any,any,any>;

            act(() => {
                container = mount(<EffectWtf callback={callback}/>);
            });

            act(() => {
                container.find(".EffectWtf").simulate("click");
            });
            act(() => {
                container.find(".EffectWtf").simulate("click");
            });

            // Then
            expect(callback).toHaveBeenCalledTimes(3);
        });

        it("Should update value wtf", (done) => {
            // Given
            let callback = jasmine.createSpy();
            let container = mount(<EffectWtf callback={callback}/>);

            // When
            container.find(".EffectWtf").simulate("click");
            container.find(".EffectWtf").simulate("click");

            setImmediate(() => {
                // Then
                expect(callback).toHaveBeenCalledTimes(3);
                done();
            });
        });
    });
});