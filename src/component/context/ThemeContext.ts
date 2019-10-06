import * as React from "react";
import {DefaultFormView} from "../view/DefaultFormView";
import {DefaultBlockView} from "../view/DefaultBlockView";
import {DefaultFieldView} from "../view/DefaultFieldView";
import {FormView} from "../../definition/view/FormView";
import {BlockView} from "../../definition/view/BlockView";
import {FieldView} from "../../definition/view/FieldView";
import {FieldInjector} from "../../definition/component/FieldInjector";
import {DefaultFieldInjector} from "../field/DefaultFieldInjector";

interface ThemeContextInterface {
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