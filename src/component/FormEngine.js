import React from "react";
import "../styles/block-container.less"
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import ResponsiveContainer from "react-responsive-widget";
import FormWrapper from "./wrapper/FormWrapper";

export default class FormEngine extends React.Component {
    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <ResponsiveContainer lg={1200} md={992} sm={700} >
                    <FormWrapper {...this.props}/>
                </ResponsiveContainer>
            </Provider>
        );
    }

}
