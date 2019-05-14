import * as React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
// import {ValueDetailEditor} from "./ValueDetailEditor";
// import {FieldSelector} from "./FieldSelector";
// import {fieldConnect} from "../../../../src/redux/fieldConnect";
// import {ModelUtils} from "../../../../src/definition/ModelUtils";
import {FormEditor} from "../../editor/FormEditor";
import {Predicate} from "../../../../src/dsl/predicate/data/Predicate";
import {SelfPredicate} from "../../../../src/dsl/predicate/data/root/SelfPredicate";
import {FieldPredicate} from "../../../../src/dsl/predicate/data/root/FieldPredicate";
import {ModelUtils} from "../../../../src/definition/ModelUtils";
import {FieldSelector} from "../FieldSelector";
import {Field} from "../../../../src/definition/model/Field";
import {ReversedPredicate} from "../../../../src/dsl/predicate/data/operation/ReversedPredicate";
import {ReversedPredicateEditor} from "./definition/ReversedPredicateEditor";
import {FieldPredicateEditor} from "./definition/FieldPredicateEditor";
import {SelfPredicateEditor} from "./definition/SelfPredicateEditor";
// import {ValueDefinedPredicate} from "../../../../src/dsl/predicate/data/leaf/value/ValueDefinedPredicate";
// import {StringEqualToPredicate} from "../../../../src/dsl/predicate/data/leaf/string/StringEqualToPredicate";
// import {ValueEqualToFieldPredicate} from "../../../../src/dsl/predicate/data/leaf/value/ValueEqualToFieldPredicate";

// let FIELD_ID = "fieldId";
// let TYPE = "type";
// let NOT = "not";
// let DETAILS = "details";
//
let TARGET = {
    SELF: "self",
    OTHER: "other",
};
//
// export const FieldPredicateTypes = {
//     defined: "defined",
//     equalToValue: "equalToValue",
//     equalToField: "equalToField",
// };


export interface PredicateEditorComponentProps {
    predicate: Predicate,
    onChange: (predicate: Predicate) => void
};

// const getDetail: (predicate:Predicate) => React.Component = (predicate:Predicate) => {
//
//     if(predicate instanceof ValueDefinedPredicate) {
//         return {
//             label: "defined",
//             defaultDetails: () => undefined
//         }
//     }
//
//     if(predicate instanceof StringEqualToPredicate) {
//         return {
//             label: "equal to",
//             defaultDetails: () => ({value: ""}),
//             Component: ValueDetailEditor
//         }
//     }
//
//     if(predicate instanceof ValueEqualToFieldPredicate) {
//         return {
//             label: "equal to field",
//             defaultDetails: (model) => ({otherId: ModelUtils.getFieldList(model)[0].id}),
//             Component: FieldSelector
//         }
//     }
//
// } ;

const getNewPredicate = (isSelf: boolean, field: Field, childPredicate: Predicate) =>
    isSelf ? new SelfPredicate(childPredicate) :
        new FieldPredicate(field, childPredicate);

export const PredicateEditor: React.FunctionComponent<PredicateEditorComponentProps> = ({predicate, onChange}) => {
    let fieldList = ModelUtils.getFieldList(FormEditor.MODEL);
    const currentPredicate = predicate as SelfPredicate | FieldPredicate;
    const isSelfPredicate = predicate instanceof SelfPredicate;

    return (
        <span className="PredicateEditor">
            if&nbsp;
            <TextField select
                       value={isSelfPredicate ? TARGET.SELF : TARGET.OTHER}
                       onChange={(event) => onChange(getNewPredicate(event.target.value === TARGET.SELF, fieldList[0], currentPredicate.predicate))}
                       margin="normal">
                 <MenuItem value={TARGET.SELF}>self</MenuItem>
                 <MenuItem value={TARGET.OTHER}>the field</MenuItem>
             </TextField>
            {isSelfPredicate ?
                <SelfPredicateEditor predicate={predicate as SelfPredicate} onChange={onChange}/> :
                <FieldPredicateEditor predicate={predicate as FieldPredicate} onChange={onChange}/>}
        </span>
    );
};


/*
{predicate instanceof FieldPredicate ? <FieldSelector field={predicate.field}
                                                                  fieldList={fieldList}
                                                                  onChange={(field) => onChange(getPredicate(false, field, currentPredicate.predicate))}/> : null}
            <ReversedPredicateEditor predicate={currentPredicate.predicate}
                                     onChange={(childPredicate) => onChange(getPredicateWithChild(predicate, childPredicate))}/>
 */

//             <TextField select
//                        value={predicate.type}
//                        onChange={(event) => this.updatePredicate(TYPE, event.target.value)}
//                        margin="normal">
//                 {Object.keys(FieldPredicateTypes)
//                     .map(type => <MenuItem key={type} value={type}>{TypeDetails[type].label}</MenuItem>)}
//             </TextField>
//         {Details ? <Details details={predicate.details}
//                             fieldList={fieldList}
//                             onChange={(details) => this.updatePredicate(DETAILS, details)}/> : null}