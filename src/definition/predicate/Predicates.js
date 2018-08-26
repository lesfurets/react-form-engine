import {FieldPredicate} from "./FieldPredicate";

export class Predicates {
    static field(fieldId) {
        return new FieldPredicate(fieldId);
    }

    static self() {
        return new FieldPredicate(null);
    }
}