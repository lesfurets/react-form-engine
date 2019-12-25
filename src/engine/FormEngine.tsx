import * as React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../definition/store/reducers';
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {EVENT_MULTICASTER, EventCallBack} from "../definition/event/EventMulticaster";
import {FormWrapper} from "../wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/theme/view/FieldView";
import {BlockView} from "../definition/theme/view/BlockView";
import {FormView} from "../definition/theme/view/FormView";
import {ThemeContext} from "../definition/theme/ThemeContext";
import {FieldInjector} from "../definition/theme/field/FieldInjector";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";

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
    fieldInjector: DefaultFieldInjector.inject,
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
    onEvent: () => {},
};