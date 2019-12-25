import * as React from "react";
import {DefaultFormView} from "../../theme/view/DefaultFormView";
import {DefaultBlockView} from "../../theme/view/DefaultBlockView";
import {DefaultFieldView} from "../../theme/view/DefaultFieldView";
import {FormView} from "./view/FormView";
import {BlockView} from "./view/BlockView";
import {FieldView} from "./view/FieldView";
import {FieldInjector} from "./field/FieldInjector";
import {DefaultFieldInjector} from "../../theme/field/DefaultFieldInjector";

export interface ThemeContextInterface {
    FormView: FormView
    BlockView: BlockView
    FieldView: FieldView
    fieldInjector: FieldInjector,
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
    fieldInjector: DefaultFieldInjector.inject,
});