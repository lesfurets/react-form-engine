import {Predicate} from "../../data/Predicate";

export abstract class PredicateDefinitionBuilder {
    abstract build(child: Predicate): Predicate;
}
