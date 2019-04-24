import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {Predicate} from "../../data/Predicate";
import {ReversedPredicate} from "../../data/operation/ReversedPredicate";

export class ReversedPredicatedBuilder extends PredicateDefinitionBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder) {
        super();
        this.parent = parent
    }

    build(child: Predicate): Predicate {
        return new ReversedPredicate(this.parent.build(child));
    }
}