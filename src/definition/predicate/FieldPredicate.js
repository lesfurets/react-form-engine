import {ValueUtils} from "../ValueUtils";

export const FIELD_PREDICATE_TYPE = {
    DEFINED: "DEFINED",
    EQUAL_TO_VALUE: "EQUAL_TO_VALUE",
    EQUAL_TO_FIELD: "EQUAL_TO_FIELD",
};

export class FieldPredicate {
    constructor(fieldId, type) {
        this.fieldId = fieldId;
        if (type !== undefined) {
            this.type = type;
        }
    }

    is() {
        this.not = false;
        return this;
    }

    isNot() {
        this.not = true;
        return this;
    }

    defined() {
        this.type = FIELD_PREDICATE_TYPE.DEFINED;
        return this;
    }

    equalTo(value) {
        this.type = FIELD_PREDICATE_TYPE.EQUAL_TO_VALUE;
        this.details = {value};
        return this;
    }

    equalToField(otherId) {
        this.type = FIELD_PREDICATE_TYPE.EQUAL_TO_FIELD;
        this.details = {otherId};
        return this;
    }

    test(context) {
        return this.not !== this._testByType(context);
    }

    _testByType (context) {
        switch (this.type) {
            case FIELD_PREDICATE_TYPE.DEFINED:
                return ValueUtils.isDefined(context[this.fieldId]);
            case FIELD_PREDICATE_TYPE.EQUAL_TO_VALUE:
                return context[this.fieldId] === this.details.value;
            case FIELD_PREDICATE_TYPE.EQUAL_TO_FIELD:
                return context[this.fieldId] === context[this.details.otherId];
        }
        return true;
    }

}