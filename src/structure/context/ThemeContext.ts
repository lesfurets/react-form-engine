import * as React from "react";
import {DefaultFormView} from "../../theme/component/view/DefaultFormView";
import {DefaultBlockView} from "../../theme/component/view/DefaultBlockView";
import {DefaultFieldView} from "../../theme/component/view/DefaultFieldView";
import {FormView} from "../../definition/view/FormView";
import {BlockView} from "../../definition/view/BlockView";
import {FieldView} from "../../definition/view/FieldView";
import {FieldInjector} from "../../definition/component/FieldInjector";
import {DefaultFieldInjector} from "../../theme/component/field/DefaultFieldInjector";

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