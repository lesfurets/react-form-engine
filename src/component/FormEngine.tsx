import * as React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import ResponsiveContainer from "react-responsive-widget";
import {FormView, FormViewProps} from "./view/FormView";
import {DefaultBlockView} from "./view/DefaultBlockView";
import {DefaultFieldView} from "./view/DefaultFieldView";
import {EMPTY_CALLBACK} from "../definition/props-utils";
import {EVENT_MULTICASTER, EventCallBack} from "../definition/event/EventMulticaster";
import FormWrapper from "./wrapper/FormWrapper";
import {Form} from "../definition/model/Form";
import {FieldViewProps} from "../definition/view/FieldView";
import {BlockViewProps} from "../definition/view/BlockView";

interface FormEngineProps {
    form: Form,
    FormView: React.SFC<FormViewProps>
    BlockView: React.SFC<BlockViewProps>
    FieldView: React.SFC<FieldViewProps>
    onEvent: EventCallBack
}


export default class FormEngine extends React.Component<FormEngineProps> {

    static defaultProps = {
        onEvent: EMPTY_CALLBACK,
        FormView: FormView,
        BlockView: DefaultBlockView,
        FieldView: DefaultFieldView,
    };

    componentWillMount() {
        EVENT_MULTICASTER.subscribe(this.props.onEvent);
    }

    componentWillUnmount() {
        EVENT_MULTICASTER.unsubscribe(this.props.onEvent);
    }

    render() {
        let {FormView, BlockView, FieldView} = this.props;
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <ResponsiveContainer lg={1200} md={992} sm={700} >
                    <FormWrapper {...this.props} View={FormView} BlockView={BlockView} FieldView={FieldView}/>
                </ResponsiveContainer>
            </Provider>
        );
    }

}