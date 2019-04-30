import {StringPredicate} from "./StringPredicate";

export class StringStartWithPredicate extends StringPredicate {
    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}

