import {Predicate} from "../Predicate";
import {PredicateRoot} from "../PredicateRoot";

export class SelfPredicate extends PredicateRoot{
    predicate: Predicate;

    constructor(predicate: Predicate) {
        super();
        this.predicate = predicate;
    }
}