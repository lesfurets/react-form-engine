import {ValueUtils} from "../ValueUtils";

export const FieldPredicateTypes = {
    defined: "defined",
    equalToValue: "equalToValue",
    equalToField: "equalToField",
};

export class FieldPredicate {
    constructor(fieldId) {
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

    equalTo(value) {
        this.type = FieldPredicateTypes.equalToValue;
        this.details = {value};
        return this;
    }

    equalToField(otherId) {
        this.type = FieldPredicateTypes.equalToField;
        this.details = {otherId};
        return this;
    }

    test(context) {
        return this.not !== this._testByType(context);
    }

    _testByType (context) {
        switch (this.type) {
            case FieldPredicateTypes.defined:
                return ValueUtils.isDefined(context[this.fieldId]);
            case FieldPredicateTypes.equalToValue:
                return context[this.fieldId] === this.details.value;
            case FieldPredicateTypes.equalToField:
                return context[this.fieldId] === context[this.details.otherId];
        }
        return true;
    }

    static load(model) {
        let predicate = new FieldPredicate();
        Object.keys(model)
            .forEach(key => predicate[key] = model[key]);
        return predicate;
    }

}