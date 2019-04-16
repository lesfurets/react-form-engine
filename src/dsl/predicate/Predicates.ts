import {FieldPredicate} from "./FieldPredicate";

export class Predicates {
    static field(fieldId: string) {
        return new FieldPredicate(fieldId);
    }

    static self() {
        return new FieldPredicate("");
    }
}