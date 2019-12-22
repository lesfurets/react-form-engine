import * as React from "react";
import {FieldWrapperComponent} from "../../../src/structure/wrapper/FieldWrapper";
import {VALID} from "../../../src/definition/validation/Validation";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {TestUtils} from "../../TestUtils";
import {mount} from "enzyme";
import {Field, FIELD_STATE} from "../../../src/definition/model/Field";
import {DefaultFieldView} from "../../../src/theme/component/view/DefaultFieldView";
import {ThemeContext} from "../../../src/structure/context/ThemeContext";
import {DefaultFieldInjector} from "../../../src/theme/component/field/DefaultFieldInjector";
import {DefaultFormView} from "../../../src/theme/component/view/DefaultFormView";
import {generateMock, testProps, triggerCallback} from "./MockComponent";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../../src/redux/reducers";
import {DefaultBlockView} from "../../../src/theme/component/view/DefaultBlockView";
import {FieldView, FieldViewProps} from "../../../src/definition/view/FieldView";
import {FieldContext} from "../../../src/definition/FieldContext";
import {FieldInjector} from "../../../src/definition/component/FieldInjector";
import {FieldComponentProps} from "../../../src/definition/component/FieldComponent";

TestUtils.init();

interface MountingProps {
    field: Field,
    context?: FieldContext,
    wrapperProps?: any,
    fieldInjector?: FieldInjector,
    FieldView?: FieldView,
}

describe("FormEngine/Wrapper/FieldWrapper", () => {
    const fieldMock = generateMock<FieldComponentProps<any>>();
    const viewMock = generateMock<FieldViewProps>();

    let testId = 'testChild1';
    let model = {id: testId, type: FieldTypes.INPUT_TEXT};
    let props = {
        field: model,
        index: 0,
        setFieldValue: TestUtils.emptyCallback,
        fieldContext: {},
        tabIndex: 0,
        forceValidation: false
    };

    let store = createStore(reducer);

    const mountWrapper = (props: MountingProps) => mount(
        <Provider store={store}>
            <ThemeContext.Provider value={{
                fieldInjector: props.fieldInjector || DefaultFieldInjector.inject,
                FormView: DefaultFormView,
                BlockView: DefaultBlockView,
                FieldView: props.FieldView || DefaultFieldView
            }}>
                <FieldWrapperComponent
                    field={props.field}
                    index={0}
                    tabIndex={0}
                    forceValidation={false}
                    fieldContext={{}}
                    {...props.wrapperProps}/>
            </ThemeContext.Provider>
        </Provider>
    );

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // When
            let container = mountWrapper({field: model, FieldView: viewMock.component});

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.DEFAULT));
        });

        it("Should be validated if context is set - valid by default", () => {
            // Given
            let fieldContext = {[testId]: "OK"};

            // When
            let container = mountWrapper({
                field: model,
                wrapperProps: {fieldContext: fieldContext},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should be validated if context is set - valid", () => {
            // Given
            let fieldContext = {[testId]: "OK"};
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => VALID
            };

            // When
            let container = mountWrapper({
                field: field,
                wrapperProps: {fieldContext: fieldContext},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should be validated if context is set - error", () => {
            // Given
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => TestUtils.ERROR
            };

            // When
            let container = mountWrapper({
                field: field,
                wrapperProps: {fieldContext: {[testId]: "OK"}},
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
                field: model,
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.VALID));
        });

        it("Should force validation - error", () => {
            // Given
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => TestUtils.ERROR
            };

            // When
            let container = mountWrapper({
                field: field,
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            // Then
            viewMock.handleMock(container, (props) => expect(props.fieldState).toBe(FIELD_STATE.ERROR));
        });

        it("Should force validation - valid", () => {
            // Given
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => VALID
            };

            // When
            let container = mountWrapper({
                field: field,
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
                field: model,
                wrapperProps: {setFieldValue: setFieldValue, forceValidation: true},
                fieldInjector: () => viewMock.component
            });

            viewMock.handleMock(container, (props) => props.onFieldEvent!(FIELD_EVENT.UPDATE_VALUE, testValue));

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(model.id, testValue);
        });

        it("Should force validation if value is submitted", () => {
            // Given
            let setFieldValue = jasmine.createSpy();


            // When
            const container = mountWrapper({
                field: model,
                wrapperProps: {setFieldValue: setFieldValue, forceValidation: true},
                fieldInjector: () => fieldMock.component,
                FieldView: viewMock.component
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
                    ...model,
                    isVisible: predicate
                },
                wrapperProps: {fieldContext:fieldContext},
            });

            // Then
            expect(predicate).toHaveBeenCalledWith(fieldContext);
        });

        it("Should pass visibility true to children", () => {
            // When
            const container = mountWrapper({
                field: {
                    ...model,
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
                    ...model,
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
                field: model,
                wrapperProps: {forceValidation: true},
                FieldView: viewMock.component
            });

            viewMock.handleMock(container, (props) => props.onEvent!(FIELD_EVENT.UPDATE_VALUE, testValue));

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, model, testValue);
        });

    });

});