import React from "react";
import {FieldWrapperComponent ,FIELD_STATE} from "../../../src/component/wrapper/FieldWrapper";
import {createTestStore, ERROR, initTest, setFieldValue, shallowRedux} from "../../../test/test-utils";
import {VALID} from "../../../src/definition/validation";
import {shallow} from "enzyme/build/index";
import {EMPTY_CALLBACK} from "../../test-utils";

initTest();

describe("FormEngine/Wrapper/Field", () => {

    let testId = 'testChild1';
    let props = {
        field: {id: testId, type: 'type-test'},
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

});