import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {ReversedPredicatedBuilder} from "./ReversedPredicatedBuilder";
import {ValuePredicateBuilder} from "../finalizer/ValuePredicateBuilder";

export abstract class PredicateRootBuilder extends PredicateDefinitionBuilder {
    is: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(this);
    isNot: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(new ReversedPredicatedBuilder(this));
}
