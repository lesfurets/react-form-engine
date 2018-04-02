import React from "react";
import "../styles/block-container.less"
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import BlockWrapper from "./wrapper/BlockWrapper";

export default class FormEngine extends React.Component {
    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <div className="form-container">
                    {this.props.blocks.map((block, index) =>
                        <BlockWrapper
                            key={index}
                            block={block}
                        />)}
                </div>
            </Provider>
        );
    }
}
