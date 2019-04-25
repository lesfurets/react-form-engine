import {VisibilityBuilder} from "../../../src/dsl/visibility/VisibilityBuilder";

describe("DSL/Visibility/VisibilityBuilder", () => {

    it("Should create visibility", () => {
        // Given
        let isVisible = true;
        let predicate = () => true;

        // When
        let visibility = VisibilityBuilder.hasVisibility(isVisible).when(predicate);

        // Then
        expect(visibility.isVisible).toBe(isVisible);
        expect(visibility.predicate).toBe(predicate);
    });

});