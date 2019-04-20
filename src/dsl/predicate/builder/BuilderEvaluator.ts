import {ReversedPredicatedBuilder} from "./PredicateTestBuilder";
import {PredicateBuilder} from "./PredicateBuilder";
import {Predicate} from "../data/Predicate";
import {FieldPredicateBuilder, SelfPredicateBuilder} from "./PredicateTargetBuilder";
import {FieldPredicate, SelfPredicate} from "../data/PredicateTarget";
import {ReversedPredicate} from "../data/ReversedPredicate";

export const buildParent: (predicate: PredicateBuilder, child: Predicate) => Predicate = (predicate: PredicateBuilder, child: Predicate) => {
    if (predicate instanceof ReversedPredicatedBuilder) {
        return new ReversedPredicate(buildParent(predicate.parent,child));
    } else if (predicate instanceof SelfPredicateBuilder) {
        return new SelfPredicate(child);
    } else if (predicate instanceof FieldPredicateBuilder) {
        return new FieldPredicate(predicate.field,child);
    }
    return {};
};