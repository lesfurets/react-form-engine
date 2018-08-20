import React from "react";
import {initTest} from "../test-utils";
import {VisibilityBuilder} from "../../src/definition/VisibilityUtils";
import {FieldPredicate} from "../../src/definition/FieldPredicate";
import {ValueUtils} from "../../src/definition/ValueUtils";
import {Predicates} from "../../src/definition/Predicates";

initTest();

describe("FormEngine/Definition/Predicate/Predicates", () => {

        it("Should create FieldPredicate", () => {
            let field = "fieldId";
            let predicate = Predicates.field(field);

            expect(predicate.fieldId).toBe(field);
        });

});