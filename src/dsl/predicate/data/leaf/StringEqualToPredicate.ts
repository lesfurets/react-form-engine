import {StringPredicate} from "./StringPredicate";

export class StringEqualToPredicate extends StringPredicate {
    value: String;

    constructor(value: String) {
        super();
        this.value = value;
    }
}

