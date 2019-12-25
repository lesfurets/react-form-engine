import {VisibilityBuilder} from "./VisibilityBuilder";
import {VisibilityRule} from "./VisibilityRule";

describe("DSL/Visibility/VisibilityBuilder", () => {

    it("Should build visibility rule", () => {
        // Given
        let isVisible = true;
        let predicate = () => true;

        // When
        let visibility = VisibilityBuilder.hasVisibility(isVisible).when(predicate);

        // Then
        expect(visibility).toBeInstanceOf(VisibilityRule);
        expect(visibility.isVisible).toBe(isVisible);
        expect(visibility.predicate).toBe(predicate);
    });

    it("Should manage isVisible", () => {
        // Given
        let builder = VisibilityBuilder.isVisible;

        // Then
        expect(builder).toBeInstanceOf(VisibilityBuilder);
        expect(builder.visible).toBe(true);
    });

    it("Should manage isNotVisible", () => {
        // Given
        let builder = VisibilityBuilder.isNotVisible;

        // Then
        expect(builder).toBeInstanceOf(VisibilityBuilder);
        expect(builder.visible).toBe(false);
    });

});