import * as React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import ResponsiveContainer from "react-responsive-widget";
import {DefaultFormView} from "./view/DefaultFormView";
import {DefaultBlockView} from "./view/DefaultBlockView";
import {DefaultFieldView} from "./view/DefaultFieldView";
import {EMPTY_CALLBACK} from "../definition/props-utils";
import {EVENT_MULTICASTER, EventCallBack} from "../definition/event/EventMulticaster";
import FormWrapper from "./wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/view/FieldView";
import {BlockView} from "../definition/view/BlockView";
import {FormView} from "../definition/view/FormView";
import {ViewContext} from "./context/ViewContext";

export interface FormEngineProps {
    form: Form,
    FormView?: FormView
    BlockView?: BlockView
    FieldView?: FieldView
    onEvent?: EventCallBack
}

export const FormEngine: React.FunctionComponent<FormEngineProps> =
    ({form, onEvent, FormView, BlockView, FieldView}) => {
        const [store] = React.useState(() => createStore(reducer));

        React.useEffect(() => {
            console.log("Subscribing");
            EVENT_MULTICASTER.subscribe(onEvent!);
            return () => {
                console.log("Unsubscribing");
                EVENT_MULTICASTER.unsubscribe(onEvent!);
            }
        }, []);

        return (
            <Provider store={store}>
                <ViewContext.Provider value={{FormView:FormView!, BlockView:BlockView!, FieldView:FieldView!}}>
                    <FormWrapper form={form}/>
                </ViewContext.Provider>
            </Provider>
        );
    };

FormEngine.defaultProps = {
    onEvent: EMPTY_CALLBACK,
    FormView: DefaultFormView,
    BlockView: DefaultBlockView,
    FieldView: DefaultFieldView,
};