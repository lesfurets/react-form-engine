import {FieldPredicate} from "../predicate/FieldPredicate";

export class VisibilityRule {

    isVisible: boolean;
    predicate: FieldPredicate;

    constructor(isVisible: boolean, predicate: FieldPredicate) {
        this.isVisible = isVisible;
        this.predicate = predicate;
    }

}