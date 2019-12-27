import {Field, FieldValue} from "../Field";

export class ValuesField extends Field {
    values: FieldValue[];
    defaultValue?: FieldValue | FieldValue[];
};