import {ValueUtils} from "./ValueUtils";

export const FIELD_PREDICATE_TYPE = {
    IS_DEFINED: "IS_DEFINED",
    IS_UNDEFINED: "IS_UNDEFINED",
};

export class FieldPredicate {
    constructor(fieldId, type) {
        this.fieldId = fieldId;
        if(type !== undefined){
            this.type = type;
        }
    }

    isDefined(){
        this.type = FIELD_PREDICATE_TYPE.IS_DEFINED;
        return this;
    }

    isUndefined(){
        this.type = FIELD_PREDICATE_TYPE.IS_UNDEFINED;
        return this;
    }

    evaluate(context){
        switch (this.type){
            case FIELD_PREDICATE_TYPE.IS_DEFINED:
                return ValueUtils.isDefined(context[this.fieldId]);
            case FIELD_PREDICATE_TYPE.IS_UNDEFINED:
                return !ValueUtils.isDefined(context[this.fieldId]);
        }
    }

}