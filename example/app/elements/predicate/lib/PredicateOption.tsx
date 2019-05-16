import {ReactNode} from "react";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";

export interface PredicateOption {
    id: string,
    label: string,
    predicate: (predicate: Predicate) => boolean,
    detailsProvider: (currentPredicate: Predicate, onChange: (predicate: Predicate) => void) => ReactNode,
    defaultPredicate: () => Predicate,
}

export class PredicateOptionUtils {
    options: PredicateOption[];

    constructor(options: PredicateOption[]) {
        this.options = options;
    }

    getType(predicate: Predicate) {
        return (this.options.find(option => option.predicate(predicate)) || this.options[0]).id
    }

    getDetailsEditor(predicate: Predicate, onChange: (predicate: Predicate) => void) {
        return (this.options.find(option => option.predicate(predicate)) || this.options[0]).detailsProvider(predicate,onChange)
    }

    getPredicate(code: string) {
        return (this.options.find(option => option.id === code) || this.options[0]).defaultPredicate()
    };

}