import * as React from "react";
import {VALID} from "../../../src/definition/validation/Validation";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {dummyField, mockFormStore, mockThemeContext, TestUtils} from "../../TestUtils";
import {mount, shallow} from "enzyme";
import {Field, FIELD_STATE} from "../../../src/definition/model/Field";
import {DefaultFieldView} from "../../../src/theme/component/view/DefaultFieldView";
import {ThemeContext} from "../../../src/structure/context/ThemeContext";
import {DefaultFieldInjector} from "../../../src/theme/component/field/DefaultFieldInjector";
import {DefaultFormView} from "../../../src/theme/component/view/DefaultFormView";
import {generateMock} from "./MockComponent";
import {DefaultBlockView} from "../../../src/theme/component/view/DefaultBlockView";
import {FieldView, FieldViewProps} from "../../../src/definition/view/FieldView";
import {FieldContext} from "../../../src/definition/FieldContext";
import {FieldInjector} from "../../../src/definition/component/FieldInjector";
import {FieldComponentProps} from "../../../src/definition/component/FieldComponent";
import {ValueSetter} from "../../../src/redux/useFieldContext";
import {FieldWrapper} from "../../../src/structure/wrapper/FieldWrapper";

TestUtils.init();

interface MountingProps {
    field: Field,
    context?: FieldContext,
    wrapperProps?: any,
    fieldInjector?: FieldInjector,
    FieldView?: FieldView,
    fieldContext?: FieldContext,
    setFieldValue?: ValueSetter,
}

describe("FormEngine/Wrapper/FieldWrapper", () => {
    const fieldMock = generateMock<FieldComponentProps<any>>();
    const viewMock = generateMock<FieldViewProps>();

    const mountWrapper = (props: MountingProps) => {
        mockFormStore(props.fieldContext, props.setFieldValue);
        mockThemeContext({
            fieldInjector: props.fieldInjector || DefaultFieldInjector.inject,
            FieldView: props.FieldView || DefaultFieldView,
        });

        return shallow(
            <FieldWrapper
                field={props.field}
                index={0}
                tabIndex={0}
                forceValidation={false}
                fieldContext={{}}
                {...props.wrapperProps}/>
        );
    };

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // When
            let container = mountWrapper({field: dummyField, FieldView: viewMock.component});

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.DEFAULT));
        });

        it("Should be validated if context is set - valid by default", () => {
            // When
            let container = mountWrapper({
                field: dummyField,
                fieldContext: {[dummyField.id]: "OK"},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should be validated if context is set - valid", () => {
            // When
            let container = mountWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => VALID
                },
                fieldContext: {[dummyField.id]: "OK"},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should be validated if context is set - error", () => {
            // When
            let container = mountWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => TestUtils.ERROR
                },
                fieldContext: {[dummyField.id]: "OK"},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.ERROR));
        });

    });


    describe("Forced States", () => {

        it("Should be valid by default when forced", () => {
            // When
            let container = mountWrapper({
                field: dummyField,
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should force validation - error", () => {
            // When
            let container = mountWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => TestUtils.ERROR
                },
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.ERROR));
        });

        it("Should force validation - valid", () => {
            // When
            let container = mountWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => VALID
                },
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

    });

    describe("Value", () => {

        it("Should be valid by default when forced", () => {
            // Given
            let testValue = "testValue";
            let setFieldValue = jasmine.createSpy();

            // When
            const container = mountWrapper({
                field: dummyField,
                wrapperProps: {forceValidation: true},
                fieldInjector: () => viewMock.component,
                setFieldValue: setFieldValue,
            });

            viewMock.handleMock(container, (props) => props.onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, testValue));

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(dummyField.id, testValue);
        });

        it("Should force validation if value is submitted", () => {
            // Given
            let setFieldValue = jasmine.createSpy();

            // When
            const container = mountWrapper({
                field: dummyField,
                wrapperProps: {forceValidation: true},
                fieldInjector: () => fieldMock.component,
                FieldView: viewMock.component,
                setFieldValue: setFieldValue,
            });

            fieldMock.handleMock(container, (props) => props.onFieldEvent!(FIELD_EVENT.SUMBIT_VALUE, "testValue"));

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

    });

    describe("Visibility", () => {

        it("Should call visibility method", () => {
            let predicate = jasmine.createSpy();
            let fieldContext = {test: "test"};
            // When
            const container = mountWrapper({
                field: {
                    ...dummyField,
                    isVisible: predicate
                },
                fieldContext: fieldContext,
            });

            // Then
            expect(predicate).toHaveBeenCalledWith(fieldContext);
        });

        it("Should pass visibility true to children", () => {
            // When
            const container = mountWrapper({
                field: {
                    ...dummyField,
                    isVisible: () => true
                },
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.isVisible).toBe(true));
        });

        it("Should pass visibility false to children", () => {
            // When
            const container = mountWrapper({
                field: {
                    ...dummyField,
                    isVisible: () => false
                },
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.isVisible).toBe(false));
        });

    });

    describe("Event", () => {

        it("Should send event on value change", () => {
            // Given
            let testValue = "testValue";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = mountWrapper({
                field: dummyField,
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            viewMock.handleMock(container, (props) => props.onEvent!(FIELD_EVENT.UPDATE_VALUE, testValue));

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, dummyField, testValue);
        });

    });

});