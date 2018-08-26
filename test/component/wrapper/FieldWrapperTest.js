import React from "react";
import {FIELD_STATE, FieldWrapperComponent} from "../../../src/component/wrapper/FieldWrapper";
import {ERROR, initTest, IS_NOT_VISIBLE, IS_VISIBLE, setFieldValue} from "../../../test/test-utils";
import {VALID} from "../../../src/definition/validation/Validation";
import {shallow, mount} from "enzyme/build/index";
import {EMPTY_CALLBACK, mockPredicate} from "../../test-utils";
import {VisibilityRule} from "../../../src/definition/visibility/VisibilityRule";
import {FIELD_EVENT} from "../../../src/definition/event/events";
import {EVENT_MULTICASTER} from "../../../src/definition/event/EventMulticaster";

initTest();

describe("FormEngine/Wrapper/FieldWrapper", () => {

    let DefaultView = () => <div/>;
    let testId = 'testChild1';
    let model = {id: testId, type: 'type-test'};
    let props = {
        field: model,
        setFieldValue: EMPTY_CALLBACK,
        fieldContext: {},
        View: DefaultView
    };

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // When
            let container = shallow(<FieldWrapperComponent {...props}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.DEFAULT);
        });

        it("Should be validated if context is set - valid by default", () => {
            // Given
            let fieldContext = {[testId]:"OK"};

            // When
            let container = shallow(<FieldWrapperComponent {...props}
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
                type: 'type-test',
                getValidation: () => VALID
            };

            // When
            let container = shallow(<FieldWrapperComponent {...props}
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
                type: 'type-test',
                getValidation: () => ERROR
            };

            // When
            let container = shallow(<FieldWrapperComponent {...props}
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
                type: 'type-test',
                getValidation: () => VALID
            };

            // When
            let container = shallow(<FieldWrapperComponent {...props}
                                                           field={field}
                                                           fieldContext={fieldContext}/>);

            // Then
            expect(container.find(DefaultView).props().fieldState).toBe(FIELD_STATE.VALID);
        });

    });


    describe("Forced States", () => {

        it("Should be valid by default when forced", () => {
            // When
            let container = shallow(<FieldWrapperComponent {...props}
                                                           forceValidation={true}/>);

            // Then
            let {fieldState} = container.instance().getState();
            expect(fieldState).toBe(FIELD_STATE.VALID);
        });

        it("Should force validation - error", () => {
            // Given
            let field = {
                id: testId,
                type: 'type-test',
                getValidation: () => ERROR
            };

            // When
            let container = shallow(<FieldWrapperComponent {...props}
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
                type: 'type-test',
                getValidation: () => VALID
            };

            // When
            let container = shallow(<FieldWrapperComponent {...props}
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
            let container = shallow(<FieldWrapperComponent {...props}
                                                           setFieldValue={setFieldValue}
                                                           forceValidation={true}/>);
            container.instance().onValueChange(testValue);

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(model.id, testValue);
        });

    });

    describe("VisibilityRule", () => {

        it("Should call visibility method", () => {
            let predicate = jasmine.createSpy();
            let fieldContext = {test:"test"};
            // When
            mount(<FieldWrapperComponent {...props}
                                         fieldContext={fieldContext}
                                         field={{
                                             ...props.field,
                                             visibility: new VisibilityRule(true, mockPredicate(predicate))
                                         }}/>);

            // Then
            expect(predicate).toHaveBeenCalledWith(fieldContext);
        });

        let simplePredicate = mockPredicate(() => true)

        it("Should pass visibility true to children", () => {
            // When
            let container = mount(<FieldWrapperComponent {...props}
                                                         field={{
                                                             ...props.field,
                                                             visibility: new VisibilityRule(true, simplePredicate)
                                                         }}/>);

            // Then
            expect(container.find(DefaultView).props().isVisible).toBe(true);
        });

        it("Should pass visibility false to children", () => {
            // When
            let container = mount(<FieldWrapperComponent {...props}
                                                         field={{
                                                             ...props.field,
                                                             visibility: new VisibilityRule(false, simplePredicate)
                                                         }}/>);

            // Then
            expect(container.find(DefaultView).props().isVisible).toBe(false);
        });

    });

    describe("Event", () => {

        it("Should send event on value change", () => {
            // Given
            let testValue = "testValue";
            let onEvent = jasmine.createSpy();

            // When
            EVENT_MULTICASTER.subscribe(onEvent);
            let container = shallow(<FieldWrapperComponent {...props}
                                                           forceValidation={true}/>);
            container.instance().onValueChange(testValue);

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.SET_VALUE, model, testValue);
        });

    });

});