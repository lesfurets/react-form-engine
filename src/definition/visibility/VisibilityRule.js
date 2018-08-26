export class VisibilityRule {
    constructor(isVisible, predicate) {
        this.isVisible = isVisible;
        this.predicate = predicate;
    }

    evaluate(context) {
        return this.predicate.test(context) === this.isVisible;
    }
}