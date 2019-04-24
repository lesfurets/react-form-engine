import {PredicateRootBuilder} from "./PredicateRootBuilder";
import {Predicate} from "../../data/Predicate";
import {SelfPredicate} from "../../data/root/SelfPredicate";

export class SelfPredicateBuilder extends PredicateRootBuilder {

    build(child: Predicate): Predicate {
        return new SelfPredicate(child);
    }
}