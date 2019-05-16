import * as React from "react";
import {ReactNode} from "react";
import {Predicate} from "../../../../../src/dsl/predicate/data/Predicate";
import {PredicateEditorComponentProps} from "../PredicateEditor";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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

export const buildOptionPredicateEditor = (options: PredicateOption[]) => {
    const optionUtils = new PredicateOptionUtils(options);
    const OptionPredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => {
        return (
            <>
                <TextField select
                           value={optionUtils.getType(predicate)}
                           onChange={(event) => onChange(optionUtils.getPredicate(event.target.value))}
                           margin="normal">
                    {optionUtils.options.map(option => <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>)}
                </TextField>
                {optionUtils.getDetailsEditor(predicate, onChange)}
            </>
        );
    };
    return OptionPredicateEditor;
};
