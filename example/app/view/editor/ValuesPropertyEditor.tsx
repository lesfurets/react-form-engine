import * as React from "react";
import {PropertyEditor} from "../../definition/component/PropertyEditor";
import Add from "@material-ui/icons/Add";
import {FieldValue} from "../../../../src/definition/model/Field";
import Button from "@material-ui/core/Button";
import {generateHash} from "../../definition/ModelUtils";
import {remove} from "lodash";
import {StringEditor} from "./common/StringEditor";

import "../../../styles/view/editor/values-property-editor.less";

const changeValue = (allValues: FieldValue[], id:string, value:string) => {
    allValues.find(value => value.id === id)!.label = value;
    return allValues
};

const removeValue = (allValues: FieldValue[], id:string) => {
    remove(allValues, value => value.id === id);
    return allValues
};

export const ValuesPropertyEditor: PropertyEditor<FieldValue[]> = ({property, value, onChange}) => (
    <div>
        <div className={"ValuesPropertyEditor-label"}>{property.label}</div>
        <div className={"ValuesPropertyEditor-values"}>
            {value.map(currentValue => (<StringEditor key={currentValue.id}
                                                      value={currentValue.label}
                                                      onChange={(label: string) => onChange(changeValue(value, currentValue.id, label))}
                                                      onDelete={() => onChange(removeValue(value, currentValue.id))}/>))}
            <Button className="BlockEditorView-add"
                    onClick={() => onChange([...value, {id: generateHash(), label: "New Value"}])}>
                <Add/> Add value
            </Button>
        </div>
    </div>
);
