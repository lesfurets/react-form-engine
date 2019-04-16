import React from "react";
import {initTest} from "../../test-utils";
import {Predicates} from "../../../src/definition/predicate/Predicates";

initTest();

describe("FormEngine/Definition/Predicate/Predicates", () => {

        it("Should create FieldPredicate", () => {
            let field = "fieldId";
            let predicate = Predicates.field(field);

            expect(predicate.fieldId).toBe(field);
        });

});