import React from "react";
import {ValidationBuilder, ValidationUtils} from "../../../src/definition/validation/ValidationUtils";
import {initTest} from "../../test-utils";

initTest();

describe("FormEngine/Definition/Validation/ValidationBuilder", () => {

        it("Should create ValidationRule", () => {
            // Given
            let errorMessage = "errorMessage";
            let predicate = () => true;

            // When
            let visibility = ValidationBuilder.error(errorMessage).when(predicate);

            // Then
            expect(visibility.validation.isValid).toBe(false);
            expect(visibility.validation.message).toBe(errorMessage);
            expect(visibility.predicate).toBe(predicate);
        });

});