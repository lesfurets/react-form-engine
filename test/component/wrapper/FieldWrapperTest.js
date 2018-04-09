import React from "react";

import FieldWrapper, {FIELD_STATE} from "../../../src/component/wrapper/FieldWrapper";
import {ERROR, initTest, mountInRedux, setFieldValue, createTestStore} from "../../../test/test-utils";
import {VALID} from "../../../src/definition/validation";

initTest();

describe("FormEngine/Wrapper/Field", () => {

    function checkComponentState(container, state) {
        Object.keys(FIELD_STATE).forEach((currentState) => {
            let fieldState = FIELD_STATE[currentState];
            expect(container.find(".field-wrapper." + fieldState.toLowerCase()).length)
                .toBe(state == fieldState ? 1 : 0, "Field is expected with state " + state + " but is " + fieldState);
        });
    }

    describe("States", () => {

        it("Should have default state when loaded", () => {
            // Given
            let field = {id: 'testChild1', type: 'type-test'};

            // When
            let container = mountInRedux(FieldWrapper, {field: field});

            // Then
            checkComponentState(container, FIELD_STATE.DEFAULT);
        });

        it("Should be validated if context is set - valid by default", () => {
            // Given
            const store = createTestStore();
            let field = {id: 'testChild1', type: 'type-test'};

            // When
            setFieldValue(field.id, 'OK', store);
            let container = mountInRedux(FieldWrapper, {field: field}, store);

            // Then
            checkComponentState(container, FIELD_STATE.VALID);
        });

        it("Should be validated if context is set - valid", () => {
            // Given
            const store = createTestStore();
            let field = {
                id: 'testChild1',
                type: 'type-test',
                getValidation: (context) => context['testChild1'] == "OK" ? VALID : ERROR
            };

            // When
            setFieldValue(field.id, 'OK', store);
            let container = mountInRedux(FieldWrapper, {field: field}, store);

            // Then
            checkComponentState(container, FIELD_STATE.VALID);
        });

        it("Should be validated if context is set - error", () => {
            // Given
            const store = createTestStore();
            let field = {
                id: 'testChild1',
                type: 'type-test',
                getValidation: (context) => context['testChild1'] == "OK" ? VALID : ERROR
            };

            // When
            setFieldValue(field.id, 'KO', store);
            let container = mountInRedux(FieldWrapper, {field: field}, store);

            // Then
            checkComponentState(container, FIELD_STATE.ERROR);
        });

    });


    describe("Forced States", () => {

        it("Should be valid by default when forced", () => {
            // Given
            let field = {id: 'testChild1', type: 'type-test'};
            // When
            let container = mountInRedux(FieldWrapper, {field: field, forceValidation: true});

            // Then
            checkComponentState(container, FIELD_STATE.VALID);
        });

        it("Should force validation - error", () => {
            // Given
            let field = {id: 'testChild1', type: 'type-test', getValidation: () => VALID};
            // When
            let container = mountInRedux(FieldWrapper, {field: field, forceValidation: true});

            // Then
            checkComponentState(container, FIELD_STATE.VALID);
        });

        it("Should force validation - valid", () => {
            // Given
            let field = {id: 'testChild1', type: 'type-test', getValidation: () => ERROR};
            // When
            let container = mountInRedux(FieldWrapper, {field: field, forceValidation: true});

            // Then
            checkComponentState(container, FIELD_STATE.ERROR);
        });

    });

});