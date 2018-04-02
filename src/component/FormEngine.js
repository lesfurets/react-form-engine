import React from "react";
import "../styles/form-container.less"
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import FieldWrapper from "./wrapper/FieldWrapper";

export default class FormEngine extends React.Component {
    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <div className="form-container">
                    {this.props.fields.map((field, index) =>
                        <FieldWrapper
                            key={index}
                            field={field}
                            tabIndex={index + 1}
                        />)}
                </div>
            </Provider>
        );
    }
}
