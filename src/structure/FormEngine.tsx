import * as React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import {DefaultFormView} from "../theme/component/view/DefaultFormView";
import {DefaultBlockView} from "../theme/component/view/DefaultBlockView";
import {DefaultFieldView} from "../theme/component/view/DefaultFieldView";
import {EMPTY_CALLBACK} from "../definition/props-utils";
import {EVENT_MULTICASTER, EventCallBack} from "../definition/event/EventMulticaster";
import {FormWrapper} from "./wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/view/FieldView";
import {BlockView} from "../definition/view/BlockView";
import {FormView} from "../definition/view/FormView";
import {ThemeContext} from "./context/ThemeContext";
import {FieldInjector} from "../definition/component/FieldInjector";
import {DefaultFieldInjector} from "../theme/component/field/DefaultFieldInjector";

export interface FormEngineProps {
    form: Form,
    FormView?: FormView
    BlockView?: BlockView
    FieldView?: FieldView
    onEvent?: EventCallBack
    fieldInjector?: FieldInjector,
}

export const FormEngine: React.FunctionComponent<FormEngineProps> =
    ({form, onEvent, FormView, BlockView, FieldView, fieldInjector}) => {
        const [store] = React.useState(() => createStore(reducer));

        React.useEffect(() => {
            EVENT_MULTICASTER.subscribe(onEvent!);
            return () => {
                EVENT_MULTICASTER.unsubscribe(onEvent!);
            }
        }, []);
        
        return (
            <Provider store={store}>
                <ThemeContext.Provider value={{FormView:FormView!, BlockView:BlockView!, FieldView:FieldView!, fieldInjector:fieldInjector!}}>
                    <FormWrapper form={form}/>
                </ThemeContext.Provider>
            </Provider>
        );
    };

FormEngine.defaultProps = {
    onEvent: EMPTY_CALLBACK,
    fieldInjector: DefaultFieldInjector.inject,
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
};