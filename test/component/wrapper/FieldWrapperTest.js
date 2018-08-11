import React from "react";
import {FIELD_EVENT, FIELD_STATE, FieldWrapperComponent} from "../../../src/component/wrapper/FieldWrapper";
import {ERROR, initTest, setFieldValue} from "../../../test/test-utils";
import {VALID} from "../../../src/definition/validation";
import {shallow} from "enzyme/build/index";
import {EMPTY_CALLBACK} from "../../test-utils";
import {BLOCK_EVENT} from "../../../src/component/wrapper/BlockWrapper";

initTest();

describe("FormEngine/Wrapper/FieldWrapper", () => {

    let testId = 'testChild1';
    let model = {id: testId, type: 'type-test'};
    let props = {
        field: model,
        setFieldValue: EMPTY_CALLBACK,
        fieldContext: {},
        View: () => <div/>
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
            let container = shallow(<FieldWrapperComponent {...props} setFieldValue={setFieldValue}
                                                           forceValidation={true}/>);
            container.instance().onValueChange(testValue);

            // Then
            expect(setFieldValue).toHaveBeenCalledWith(model.id, testValue);
        });

    });

    describe("Event", () => {

        it("Should send event on value change", () => {
            // Given
            let testValue = "testValue";
            let onEvent = jasmine.createSpy();

            // When
            let container = shallow(<FieldWrapperComponent {...props} onEvent={onEvent}
                                                           forceValidation={true}/>);
            container.instance().onValueChange(testValue);

            // Then
            expect(onEvent).toHaveBeenCalledWith(FIELD_EVENT.SET_VALUE, model, testValue);
        });

    });

});