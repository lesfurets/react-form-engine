import * as React from "react";
import {VALID} from "../definition/validation/Validation";
import {FIELD_EVENT} from "../definition/event/events";
import {EventCallBack} from "../definition/event/EventMulticaster";
import {
    dummyField,
    fieldError,
    initTest,
    mockEventContext,
    mockFormStore,
    mockThemeContext
} from "../_tests_/TestUtils";
import {shallow} from "enzyme";
import {Field, FIELD_STATE} from "../definition/model/Field";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {generateMock} from "../_tests_/MockComponent";
import {FieldView, FieldViewProps} from "../definition/theme/view/FieldView";
import {FieldContext} from "../redux/FieldContext";
import {FieldInjector} from "../definition/theme/field/FieldInjector";
import {FieldComponentProps} from "../definition/theme/field/FieldComponent";
import {ValueSetter} from "../definition/redux/useFieldContext";
import {FieldWrapper} from "./FieldWrapper";

initTest();

interface MountingProps {
    field: Field,
    forceValidation?: boolean,
    fieldInjector?: FieldInjector,
    FieldView?: FieldView,
    fieldContext?: FieldContext,
    setFieldValue?: ValueSetter,
    onEvent?: EventCallBack,
}

const fieldMock = generateMock<FieldComponentProps<any, any>>();
const viewMock = generateMock<FieldViewProps>();

const shallowWrapper = (props: MountingProps) => {
    mockFormStore(props.fieldContext, props.setFieldValue);
    mockEventContext(props.onEvent);
    mockThemeContext({
        fieldInjector: props.fieldInjector || DefaultFieldInjector.inject,
        FieldView: props.FieldView || DefaultFieldView,
    });

    return shallow(
        <FieldWrapper
            field={props.field}
            index={0}
            tabIndex={0}
            forceValidation={props.forceValidation!}/>
    );
};

describe("FormEngine/Wrapper/FieldWrapper", () => {

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // When
            let container = shallowWrapper({field: dummyField, FieldView: viewMock.component});

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.DEFAULT));
        });

        it("Should be validated if context is set - valid by default", () => {
            // When
            let container = shallowWrapper({
                field: dummyField,
                fieldContext: {[dummyField.id]: "OK"},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should be validated if context is set - valid", () => {
            // When
            let container = shallowWrapper({
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
            let container = shallowWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => fieldError
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
            let container = shallowWrapper({
                field: dummyField,
                forceValidation: true,
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should force validation - error", () => {
            // When
            let container = shallowWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => fieldError
                },
                forceValidation: true,
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.ERROR));
        });

        it("Should force validation - valid", () => {
            // When
            let container = shallowWrapper({
                field: {
                    ...dummyField,
                    getValidation: () => VALID
                },
                forceValidation: true,
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
            const container = shallowWrapper({
                field: dummyField,
                forceValidation: true,
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
            const container = shallowWrapper({
                field: dummyField,
                forceValidation: true,
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
            const container = shallowWrapper({
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
            const container = shallowWrapper({
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
            const container = shallowWrapper({
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
            let container = shallowWrapper({
                field: dummyField,
                forceValidation: true,
                FieldView: viewMock.component,
                onEvent: onEvent,
            });

            viewMock.handleMock(container, (props) => props.onEvent!(FIELD_EVENT.UPDATE_VALUE, testValue));

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, dummyField, testValue);
        });

    });

    describe("FieldInjector", () => {

        it("Should call injector with right type", () => {
            // Given
            let fieldInjector = jasmine.createSpy();

            // When
            shallowWrapper({
                field: dummyField,
                fieldInjector: fieldInjector,
            });

            // Then
            expect(fieldInjector).toHaveBeenCalledWith(dummyField.type);
        });

    });
});