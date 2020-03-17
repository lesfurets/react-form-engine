export enum EventTypes {
    Form = "Form",
    FormView = "FormView",
    Block = "Block",
    BlockView = "BlockView",
    Field = "Field",
    FieldView = "FieldView",
    FieldComponent = "FieldComponent",
};

export class FormEvent {
    id: string;
    type: EventTypes;

    constructor(id: string, type: EventTypes) {
        this.id = id;
        this.type = type;
    }
}