import * as React from "react";
import {Property} from "../Property";

export interface PropertyEditorProps<T> {
    property: Property,
    value: T,
    onChange: (value: T) => void,
    onDelete: () => void,
}

export type PropertyEditor<T> = React.FunctionComponent<PropertyEditorProps<T>>