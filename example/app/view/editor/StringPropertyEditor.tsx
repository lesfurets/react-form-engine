import * as React from "react";
import {PropertyEditor} from "../../definition/component/PropertyEditor";
import {StringEditor} from "./common/StringEditor";

export const StringPropertyEditor: PropertyEditor<string> = ({property, value, onChange, onDelete}) => (
    <StringEditor label={property.label} value={value} onChange={onChange} onDelete={onDelete}/>
);
