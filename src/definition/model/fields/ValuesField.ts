import {Field, FieldValue} from "../Field";

export class ValuesField extends Field<string> {
    values: FieldValue[];
    defaultValue?: FieldValue | FieldValue[];
};