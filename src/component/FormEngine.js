import React from "react";
import "../styles/block-container.less"
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from '../redux/reducers';
import BlockWrapper, {BLOCK_EVENT, BLOCK_STATE} from "./wrapper/BlockWrapper";
import ResponsiveContainer from "react-responsive-widget";

export default class FormEngine extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBlockIndex: 0
        }
        this.getBlockState = this.getBlockState.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    render() {
        const store = createStore(reducer);
        return (
            <Provider store={store}>
                <ResponsiveContainer lg={1200} md={992} sm={700} >
                    <div className="form-container">
                        {this.props.blocks.map((block, index) =>
                            <BlockWrapper
                                key={index}
                                block={block}
                                blockState={this.getBlockState(index)}
                                blockIndex={index}
                                onBlockEvent={this.onBlockEvent}
                            />)}
                    </div>
                </ResponsiveContainer>
            </Provider>
        );
    }

    getBlockState(index) {
        if (index < this.state.currentBlockIndex) {
            return BLOCK_STATE.DONE;
        }
        if (index == this.state.currentBlockIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.DONE;
    }

    onBlockEvent(event, index) {
        switch (event) {
            case BLOCK_EVENT.NEXT:
                this.setState({currentBlockIndex: index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentBlockIndex: index - 1});
                break;
        }
    }
}
