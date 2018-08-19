import React from "react";
import {initTest} from "../test-utils";
import {VisibilityBuilder} from "../../src/definition/VisibilityUtils";

initTest();

describe("FormEngine/Definition/VisibilityUtils", () => {

    describe("Builder", () => {

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

});