import * as React from "react";
import {VALID} from "../../../src/definition/validation/Validation";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {dummyField, fieldError, initTest, mockFormStore, mockThemeContext} from "../../TestUtils";
import {shallow} from "enzyme";
import {Field, FIELD_STATE} from "../../../src/definition/model/Field";
import {DefaultFieldView} from "../../../src/theme/component/view/DefaultFieldView";
import {DefaultFieldInjector} from "../../../src/theme/component/field/DefaultFieldInjector";
import {generateMock} from "./MockComponent";
import {FieldView, FieldViewProps} from "../../../src/definition/view/FieldView";
import {FieldContext} from "../../../src/definition/FieldContext";
import {FieldInjector} from "../../../src/definition/component/FieldInjector";
import {FieldComponentProps} from "../../../src/definition/component/FieldComponent";
import {ValueSetter} from "../../../src/redux/useFieldContext";
import {FieldWrapper} from "../../../src/structure/wrapper/FieldWrapper";

initTest();

interface MountingProps {
    field: Field,
    forceValidation?: boolean,
    fieldInjector?: FieldInjector,
    FieldView?: FieldView,
    fieldContext?: FieldContext,
    setFieldValue?: ValueSetter,
}

const fieldMock = generateMock<FieldComponentProps<any>>();
const viewMock = generateMock<FieldViewProps>();

const shallowWrapper = (props: MountingProps) => {
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
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallowWrapper({
                field: dummyField,
                forceValidation: true,
                FieldView: viewMock.component
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