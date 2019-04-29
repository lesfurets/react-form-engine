import {VisibilityRule} from "./VisibilityRule";
import {Predicate} from "../predicate/data/Predicate";

export class VisibilityBuilder {
    static hasVisibility(isVisible: boolean) {
        return new VisibilityBuilder(isVisible)
    }

    static isVisible = VisibilityBuilder.hasVisibility(true);
    static isNotVisible = VisibilityBuilder.hasVisibility(false);


    visible: boolean;

    constructor(visible: boolean) {
        this.visible = visible;
    }

    when(predicate: Predicate) {
        return new VisibilityRule(this.visible, predicate);
    }

}