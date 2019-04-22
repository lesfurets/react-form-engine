import {Predicate} from "../predicate/data/Predicate";

export class VisibilityRule {

    isVisible: boolean;
    predicate: Predicate;

    constructor(isVisible: boolean, predicate: Predicate) {
        this.isVisible = isVisible;
        this.predicate = predicate;
    }

}