export enum EventTypes {
    Form = "Form",
    Block = "Block",
    Field = "Field",
};

export class FormEvent {
    id: string;
    type: EventTypes;

    constructor(id: string, type: EventTypes) {
        this.id = id;
        this.type = type;
    }
}