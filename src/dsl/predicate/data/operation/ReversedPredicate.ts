import {PredicateOperation} from "../PredicateOperation";
import {Predicate} from "../Predicate";

export class ReversedPredicate extends PredicateOperation {
    child: Predicate;

    constructor(child: Predicate) {
        super();
        this.child = child;
    }
}