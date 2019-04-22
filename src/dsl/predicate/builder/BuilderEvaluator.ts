import {PredicateBuilder} from "./PredicateBuilder";
import {Predicate} from "../data/Predicate";
import {ReversedPredicate} from "../data/oparation/ReversedPredicate";
import {ReversedPredicatedBuilder} from "./PredicateTestBuilder";
import {FieldPredicateBuilder, SelfPredicateBuilder} from "./PredicateTargetBuilder";
import {FieldPredicate} from "../data/root/FieldPredicate";
import {SelfPredicate} from "../data/root/SelfPredicate";

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