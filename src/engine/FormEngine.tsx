import * as React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../definition/redux/reducers';
import {DefaultFormView} from "../theme/view/DefaultFormView";
import {DefaultBlockView} from "../theme/view/DefaultBlockView";
import {DefaultFieldView} from "../theme/view/DefaultFieldView";
import {EventCallBack, EventMulticaster} from "../definition/event/EventMulticaster";
import {FormWrapper} from "../wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldView} from "../definition/theme/view/FieldView";
import {BlockView} from "../definition/theme/view/BlockView";
import {FormView} from "../definition/theme/view/FormView";
import {ThemeContext} from "../definition/theme/ThemeContext";
import {FieldInjector} from "../definition/theme/field/FieldInjector";
import {DefaultFieldInjector} from "../theme/field/DefaultFieldInjector";
import {EventContext} from "../definition/event/EventContext";

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
        const [eventMulticaster] = React.useState(() => new EventMulticaster(onEvent!));

        React.useEffect(() => {
            eventMulticaster.subscribe(onEvent!);
            return () => {
                eventMulticaster.unsubscribe(onEvent!);
            }
        }, []);
        
        return (
            <Provider store={store}>
                <EventContext.Provider value={eventMulticaster}>
                    <ThemeContext.Provider value={{FormView:FormView!, BlockView:BlockView!, FieldView:FieldView!, fieldInjector:fieldInjector!}}>
                        <FormWrapper form={form}/>
                    </ThemeContext.Provider>
                </EventContext.Provider>
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