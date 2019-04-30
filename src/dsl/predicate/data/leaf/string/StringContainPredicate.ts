import {StringPredicate} from "./StringPredicate";

export class StringContainPredicate extends StringPredicate {
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}

