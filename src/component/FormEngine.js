import React from "react";
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import ResponsiveContainer from "react-responsive-widget";
import FormWrapper from "./wrapper/FormWrapper";
import {FormView} from "./view/FormView";
import {BlockView} from "./view/BlockView";
import {FieldView} from "./view/FieldView";
import {EMPTY_CALLBACK} from "../definition/props-utils";

export default class FormEngine extends React.Component {
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

FormEngine.propTypes = FormWrapper.propTypes;

FormEngine.defaultProps = {
    onEvent: EMPTY_CALLBACK,
    FormView: FormView,
    BlockView: BlockView,
    FieldView: FieldView,
};
