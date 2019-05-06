import * as React from "react";
import {FieldWrapperComponent} from "../../../src/component/wrapper/FieldWrapper";
import {VALID} from "../../../src/definition/validation/Validation";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";
import {FieldTypes} from "../../../src/definition/FieldTypes";
import {TestUtils} from "../../TestUtils";
import {mount, shallow} from "enzyme";
import {FieldViewProps} from "../../../src/component/view/FieldView";
import {FIELD_STATE} from "../../../src/definition/FormModel";

TestUtils.init();

describe("FormEngine/Wrapper/FieldWrapper", () => {

    let TestFieldView = (p: FieldViewProps) => (<div>{p.children}</div>);
    let testId = 'testChild1';
    let model = {id: testId, type: FieldTypes.INPUT_TEXT};
    let props = {
        field: model,
        setFieldValue: TestUtils.emptyCallback,
        fieldContext: {},
        View: TestFieldView
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
            let container = shallow<FieldWrapperComponent>(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           fieldContext={fieldContext}/>);

            // Then
            expect(container.find(TestFieldView).props().fieldState).toBe(FIELD_STATE.VALID);
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
            container.instance().onValueChange(testValue);

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(model.id, testValue);
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
            expect(container.find(TestFieldView).props().isVisible).toBe(true);
        });

        it("Should pass visibility false to children", () => {
            // When
            let container = mount(<FieldWrapperComponent {...props}
                                                         field={{
                                                             ...props.field,
                                                             isVisible: () => false
                                                         }}/>);

            // Then
            expect(container.find(TestFieldView).props().isVisible).toBe(false);
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
            container.instance().onValueChange(testValue);

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.SET_VALUE, model, testValue);
        });

    });

});