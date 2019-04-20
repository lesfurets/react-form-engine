import {FieldPredicate2} from "./FieldPredicate";

export class Predicates {
    static field(fieldId: string) {
        return new FieldPredicate2(fieldId);
    }

    static self() {
        return new FieldPredicate2("");
    }
}