import {PredicateTest} from "./PredicateTest";
import {Predicate} from "./Predicate";

export class ReversedPredicate implements PredicateTest {
    child: Predicate;

    constructor(child: Predicate) {
        this.child = child;
    }
}