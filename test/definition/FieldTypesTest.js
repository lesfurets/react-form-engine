import React from "react";

import {FieldTypes, FieldTypesDetails} from "../../src/definition/FieldTypes";
import {initTest} from "../test-utils";

initTest();

describe("FormEngine/Definition/FieldTypes", () => {


    Object.values(FieldTypes).forEach(type => {

        let detail = FieldTypesDetails[type];

        describe(type.id, () => {
            it("Should have label", () => {
                expect(detail.label).not.toBe(null);
                expect(typeof detail.label).toBe("string");
            });
        });

    });

});