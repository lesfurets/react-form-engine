import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {ReversedPredicateBuilder} from "./ReversedPredicateBuilder";
import {ValuePredicateBuilder} from "../value/ValuePredicateBuilder";

export abstract class PredicateRootBuilder extends PredicateDefinitionBuilder {
    is:ValuePredicateBuilder;
    isNot:ValuePredicateBuilder;


    constructor() {
        super();
        this.is = new ValuePredicateBuilder(this);
        this.isNot = new ValuePredicateBuilder(new ReversedPredicateBuilder(this));
    }

}
