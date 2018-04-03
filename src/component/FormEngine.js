import React from "react";
import "../styles/block-container.less"
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import BlockWrapper, {BLOCK_STATE} from "./wrapper/BlockWrapper";

export default class FormEngine extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBlockIndex: 0
        }
        this.getBlockState = this.getBlockState.bind(this);
    }
    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <div className="form-container">
                    {this.props.blocks.map((block, index) =>
                        <BlockWrapper
                            key={index}
                            block={block}
                            blockState={this.getBlockState(index)}
                        />)}
                </div>
            </Provider>
        );
    }

    getBlockState(index) {
        if(index < this.state.currentBlockIndex) {
            return BLOCK_STATE.DONE;
        }
        if(index == this.state.currentBlockIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.DONE;
    }
}
