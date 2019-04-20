import {Predicates} from "../../../src/dsl/predicate/Predicates";

describe("FormEngine/Definition/Predicate/Predicates", () => {

        it("Should create FieldPredicate2", () => {
            let field = "fieldId";
            let predicate = Predicates.field(field);

            expect(predicate.fieldId).toBe(field);
        });

});