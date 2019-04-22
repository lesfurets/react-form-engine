import {VisibilityRule} from "./VisibilityRule";
import {Predicate} from "../predicate/data/Predicate";

export class VisibilityBuilder {

    isVisible: boolean;

    constructor(isVisible: boolean) {
        this.isVisible = isVisible;
    }

    when(predicate: Predicate) {
        return new VisibilityRule(this.isVisible, predicate);
    }

    static hasVisibility(isVisible: boolean) {
        return new VisibilityBuilder(isVisible)
    }

    static isVisible() {
        return VisibilityBuilder.hasVisibility(true);
    }

    static isNotVisible() {
        return VisibilityBuilder.hasVisibility(false);
    }
}