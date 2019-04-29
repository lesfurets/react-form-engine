import {ValidationBuilder} from "../../../src/dsl/validation/ValidationBuilder";
import {ValidationRule} from "../../../src/dsl/validation/ValidationRule";
import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";
import {VALID} from "../../../src/definition/validation/Validation";

describe("DSL/Validation/ValidationBuilder", () => {

    it("Should build ValidationRule", () => {
        // Given
        let errorMessage = "errorMessage";
        let predicate = () => true;

        // When
        let validation = ValidationBuilder.error(errorMessage).when(predicate);

        // Then
        expect(validation).toBeInstanceOf(ValidationRule);
        expect(validation.validation.isValid).toBe(false);
        expect(validation.validation.message).toBe(errorMessage);
        expect(validation.predicate).toBe(predicate);
    });

    it("Should manage error", () => {
        // Given
        let errorMessage = "errorMessage";
        let builder = ValidationBuilder.error(errorMessage);

        // Then
        expect(builder).toBeInstanceOf(ValidationBuilder);
        expect(builder.validation.isValid).toBe(false);
        expect(builder.validation.message).toBe(errorMessage);
    });

    it("Should manage valid", () => {
        // Given
        let builder = ValidationBuilder.valid;

        // Then
        expect(builder).toBeInstanceOf(ValidationBuilder);
        expect(builder.validation).toBe(VALID);
    });

});