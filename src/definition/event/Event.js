export const EventTypes = {
    Form: "Form",
    Block: "Block",
    Field: "Field",
};

export class Event {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}