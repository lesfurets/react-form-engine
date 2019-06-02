import * as React from "react";
import {DefaultFormView} from "../view/DefaultFormView";
import {DefaultBlockView} from "../view/DefaultBlockView";
import {DefaultFieldView} from "../view/DefaultFieldView";
import {FormView} from "../../definition/view/FormView";
import {BlockView} from "../../definition/view/BlockView";
import {FieldView} from "../../definition/view/FieldView";

interface ThemeContextInterface {
    FormView: FormView
    BlockView: BlockView
    FieldView: FieldView
}

export const ViewContext = React.createContext<ThemeContextInterface>({
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
});