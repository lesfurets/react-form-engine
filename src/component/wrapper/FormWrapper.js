import React from "react";
import {BLOCK_EVENT, BLOCK_STATE} from "./BlockWrapper";
import {BlockWrapper} from "./BlockWrapper";
import PropTypes from "prop-types";
import {EMPTY_CALLBACK} from "../utils/props-utils";

export default class FormWrapper extends React.Component {
    constructor() {
        super();
        this.state = {currentBlockIndex: 0};
        this.getBlockState = this.getBlockState.bind(this);
        this.onBlockEvent = this.onBlockEvent.bind(this);
    }

    render() {
        let {View, BlockView, FieldView} = this.props;
        return (
            <div className="FormWrapper">
                <View>
                    {this.props.blocks.map((block, index) =>
                        <BlockWrapper
                            key={index}
                            block={{...block, index:index}}
                            blockState={this.getBlockState(index)}
                            onEvent={this.onBlockEvent}
                            View={BlockView}
                            FieldView={FieldView}
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

    onBlockEvent(event, block, details) {
        switch (event) {
            case BLOCK_EVENT.VALID:
                this.setState({currentBlockIndex: block.index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentBlockIndex: block.index - 1});
                break;
        }
        this.props.onEvent(event, block, details);
    }
}

FormWrapper.propTypes = {
    onEvent: PropTypes.func,
    View: PropTypes.func.isRequired,
    BlockView: PropTypes.func.isRequired,
    FieldView: PropTypes.func.isRequired,
};

FormWrapper.defaultProps = {
    onEvent: EMPTY_CALLBACK
};