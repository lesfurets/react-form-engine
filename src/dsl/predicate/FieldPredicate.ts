import {ValueUtils} from "../../definition/ValueUtils";
import {FieldContextState, Form} from "../../definition/FormModel";

export enum FieldPredicateTypes {
    defined="defined",
    equalToValue="equalToValue",
    equalToField="equalToField",
};

export class FieldPredicate {

    fieldId: string;
    not: boolean;
    type: FieldPredicateTypes;
    details: string;

    constructor(fieldId: string) {
        this.fieldId = fieldId;
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
        this.type = FieldPredicateTypes.defined;
        return this;
    }

    equalTo(value: string) {
        this.type = FieldPredicateTypes.equalToValue;
        this.details = value;
        return this;
    }

    equalToField(otherId: string) {
        this.type = FieldPredicateTypes.equalToField;
        this.details = otherId;
        return this;
    }

    test(context: FieldContextState) {
        return this.not !== this._testByType(context);
    }

    _testByType (context: FieldContextState) {
        switch (this.type) {
            case FieldPredicateTypes.defined:
                return ValueUtils.isDefined(context[this.fieldId]);
            case FieldPredicateTypes.equalToValue:
                return context[this.fieldId] === this.details;
            case FieldPredicateTypes.equalToField:
                return context[this.fieldId] === context[this.details];
        }
        return true;
    }

}