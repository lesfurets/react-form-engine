import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {ReversedPredicateBuilder} from "./ReversedPredicateBuilder";
import {ValuePredicateBuilder} from "../finalizer/ValuePredicateBuilder";

export abstract class PredicateRootBuilder extends PredicateDefinitionBuilder {
    is: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(this);
    isNot: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(new ReversedPredicateBuilder(this));
}
