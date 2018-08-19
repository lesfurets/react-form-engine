export class FieldPredicate {
    constructor(fieldId) {
        this.fieldId = fieldId;
    }

    isDefined(){
        return (context) => {
            return context[this.fieldId] !== undefined &&
                context[this.fieldId] !== null &&
                context[this.fieldId] !== "";
        }
    }

    isUndefined(){
        return (context) => {
            return context[this.fieldId] === undefined ||
                context[this.fieldId] === null ||
                context[this.fieldId] === "";
        }
    }

    static field(field) {
        return new FieldPredicate(field.id);
    }
}