import {FieldTypes, FieldTypesDetails} from "../../src/definition/FieldTypes";

describe("FormEngine/Definition/FieldTypes", () => {

    Object.values(FieldTypes).forEach((type: FieldTypes) => {

        const typeDetails = FieldTypesDetails[type];

        describe(type, () => {
            it("Should have label", () => {
                expect(typeDetails.label).not.toBe(null);
                expect(typeof typeDetails.label).toBe("string");
            });
        });

    });

});