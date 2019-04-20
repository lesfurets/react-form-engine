import {FieldPredicate2} from "../predicate/FieldPredicate";

export class VisibilityRule {

    isVisible: boolean;
    predicate: FieldPredicate2;

    constructor(isVisible: boolean, predicate: FieldPredicate2) {
        this.isVisible = isVisible;
        this.predicate = predicate;
    }

}