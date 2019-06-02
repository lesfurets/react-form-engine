import * as React from "react";
import {FieldWrapperComponent} from "../../../src/component/wrapper/FieldWrapper";
import {VALID} from "../../../src/definition/validation/Validation";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {TestUtils} from "../../TestUtils";
import {mount, shallow} from "enzyme";
import {FIELD_STATE} from "../../../src/definition/model/Field";
import {DefaultFieldView} from "../../../src/component/view/DefaultFieldView";

TestUtils.init();

describe("FormEngine/Wrapper/FieldWrapper", () => {

    let testId = 'testChild1';
    let model = {id: testId, type: FieldTypes.INPUT_TEXT};
    let props = {
        field: model,
        setFieldValue: TestUtils.emptyCallback,
        fieldContext: {},
    };

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.DEFAULT);
        });

        it("Should be validated if context is set - valid by default", () => {
            // Given
            let fieldContext = {[testId]:"OK"};

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           fieldContext={fieldContext}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

        it("Should be validated if context is set - valid", () => {
            // Given
            let fieldContext = {[testId]:"OK"};
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => VALID
            };

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           fieldContext={fieldContext}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

        it("Should be validated if context is set - error", () => {
            // Given
            let fieldContext = {[testId]:"OK"};
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => TestUtils.ERROR
            };

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           fieldContext={fieldContext}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.ERROR);
        });

        it("Should pass state to children", () => {
            // Given
            let fieldContext = {[testId]:"OK"};
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => VALID
            };

            // When
            let container = mount<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           fieldContext={fieldContext}/>);

            console.log(container.debug());
            // Then
            expect(container.find(DefaultFieldView).props().fieldState).toBe(FIELD_STATE.VALID);
        });

    });


    describe("Forced States", () => {

        it("Should be valid by default when forced", () => {
            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           forceValidation={true}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

        it("Should force validation - error", () => {
            // Given
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => TestUtils.ERROR
            };

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           forceValidation={true}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.ERROR);
        });

        it("Should force validation - valid", () => {
            // Given
            let field = {
                id: testId,
                type: FieldTypes.INPUT_TEXT,
                getValidation: () => VALID
            };

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           forceValidation={true}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

    });

    describe("Value", () => {

        it("Should be valid by default when forced", () => {
            // Given
            let testValue = "testValue";
            let setFieldValue = jasmine.createSpy();

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           setFieldValue={setFieldValue}
                                                           forceValidation={true}/>);
            container.instance().onFieldEvent(FIELD_EVENT.UPDATE_VALUE, testValue);

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(model.id, testValue);
        });

        it("Should force validation if value is submitted", () => {
            // Given
            let testValue = "testValue";
            let setFieldValue = jasmine.createSpy();

            // When
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                                                  setFieldValue={setFieldValue}
                                                                                  forceValidation={true}/>);
            container.instance().onFieldEvent(FIELD_EVENT.SUMBIT_VALUE, testValue);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

    });

    describe("Visibility", () => {

        it("Should call visibility method", () => {
            let predicate = jasmine.createSpy();
            let fieldContext = {test:"test"};
            // When
            mount(<FieldWrapperComponent {...props}
                                         fieldContext={fieldContext}
                                         field={{
                                             ...props.field,
                                             isVisible: predicate
                                         }}/>);

            // Then
            expect(predicate).toHaveBeenCalledWith(fieldContext);
        });

        it("Should pass visibility true to children", () => {
            // When
            let container = mount(<FieldWrapperComponent {...props}
                                                         field={{
                                                             ...props.field,
                                                             isVisible: () => true
                                                         }}/>);

            // Then
            expect(container.find(DefaultFieldView).props().isVisible).toBe(true);
        });

        it("Should pass visibility false to children", () => {
            // When
            let container = mount(<FieldWrapperComponent {...props}
                                                         field={{
                                                             ...props.field,
                                                             isVisible: () => false
                                                         }}/>);

            console.log(container.debug());
            // Then
            expect(container.find(DefaultFieldView).props().isVisible).toBe(false);
        });

    });

    describe("Event", () => {

        it("Should send event on value change", () => {
            // Given
            let testValue = "testValue";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           forceValidation={true}/>);
            container.instance().onFieldEvent(FIELD_EVENT.UPDATE_VALUE, testValue);

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.UPDATE_VALUE, model, testValue);
        });

    });

});