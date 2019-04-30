import {StringPredicate} from "./StringPredicate";

export class StringEndWithPredicate extends StringPredicate {
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}

