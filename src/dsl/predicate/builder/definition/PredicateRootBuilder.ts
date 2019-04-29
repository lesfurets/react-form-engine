import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {ReversedPredicateBuilder} from "./ReversedPredicateBuilder";
import {ValueTypePredicateBuilder} from "../finalizer/ValueTypePredicateBuilder";

export abstract class PredicateRootBuilder extends PredicateDefinitionBuilder {
    is:ValueTypePredicateBuilder;
    isNot:ValueTypePredicateBuilder;


    constructor() {
        super();
        this.is = new ValueTypePredicateBuilder(this);
        this.isNot = new ValueTypePredicateBuilder(new ReversedPredicateBuilder(this));
    }

}
