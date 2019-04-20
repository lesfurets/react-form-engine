import {PredicateDefinitionBuilder} from "./PredicateDefinitionBuilder";
import {Predicate} from "../data/Predicate";
import {PredicateTargetBuilder} from "./PredicateTargetBuilder";
import {PredicateBuilder} from "./PredicateBuilder";
import {buildParent} from "./BuilderEvaluator";
import {DefinedPredicate, EqualToFieldPredicate, EqualToPredicate} from "../data/ValuePredicate";
import {Field} from "../../../definition/FormModel";

export class PredicateTestBuilder implements PredicateBuilder{
    parent: PredicateDefinitionBuilder
}

export class ReversedPredicatedBuilder extends PredicateTestBuilder implements PredicateDefinitionBuilder {
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateTargetBuilder){
        super();
        this.parent = parent
    }
}

export class ValuePredicateBuilder extends PredicateTestBuilder{
    parent: PredicateDefinitionBuilder;

    constructor(parent: PredicateDefinitionBuilder){
        super();
        this.parent = parent
    }


    defined():Predicate {
        return buildParent(this.parent, new DefinedPredicate());
    }

    equalTo(value: string):Predicate {
        return buildParent(this.parent, new EqualToPredicate(value));
    }

    equalToField(otherField: Field):Predicate {
        return buildParent(this.parent, new EqualToFieldPredicate(otherField));
    }
}