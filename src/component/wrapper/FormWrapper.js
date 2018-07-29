import React from "react";
import {BLOCK_EVENT, BLOCK_STATE} from "./BlockWrapper";
import {FormView} from "../view/FormView";
import BlockWrapper from "./BlockWrapper";
import PropTypes from "prop-types";

export default class FormWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBlockIndex: 0
        };
        this.getBlockState = this.getBlockState.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    render() {
        let View = this.props.View;
        return (
            <div className="form-wrapper">
                <View>
                    {this.props.blocks.map((block, index) =>
                        <BlockWrapper
                            key={index}
                            block={block}
                            blockState={this.getBlockState(index)}
                            blockIndex={index}
                            onBlockEvent={this.onBlockEvent}
                        />)}
                </View>
            </div>
        );
    }

    getBlockState(index) {
        if (index < this.state.currentBlockIndex) {
            return BLOCK_STATE.DONE;
        }
        if (index === this.state.currentBlockIndex) {
            return BLOCK_STATE.DOING;
        }
        return BLOCK_STATE.TODO;
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

FormWrapper.propTypes = {
    View: PropTypes.func,
};

FormWrapper.defaultProps = {
    View: FormView
};