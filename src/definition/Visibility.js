export class Visibility {
    constructor(isVisible, predicate) {
        this.isVisible = isVisible;
        this.predicate = predicate;
    }

    evaluate(context) {
        return this.predicate.evaluate(context) === this.isVisible;
    }
}