import {Field} from "../../../definition/FormModel";
import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {ReversedPredicatedBuilder, ValuePredicateBuilder} from "./PredicateTestBuilder";

export class PredicateTargetBuilder implements PredicateDefinitionBuilder{
    is: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(this);
    isNot: () => ValuePredicateBuilder = () => new ValuePredicateBuilder(new ReversedPredicatedBuilder(this));
}

export class FieldPredicateBuilder extends PredicateTargetBuilder{
    field: Field;

    constructor(field: Field) {
        super();
        this.field = field;
    }
}

export class SelfPredicateBuilder extends PredicateTargetBuilder{
}