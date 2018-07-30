import React from "react";
import {BLOCK_EVENT, BLOCK_STATE} from "./BlockWrapper";
import {FormView} from "../view/FormView";
import {BlockWrapper} from "./BlockWrapper";
import PropTypes from "prop-types";
import {BlockView} from "../view/BlockView";
import {FieldView} from "../view/FieldView";

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
                            block={{...block, index:index}}
                            blockState={this.getBlockState(index)}
                            onBlockEvent={this.onBlockEvent}
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

    onBlockEvent(event, block) {
        switch (event) {
            case BLOCK_EVENT.VALID:
                this.setState({currentBlockIndex: block.index + 1});
                break;
            case BLOCK_EVENT.PREVIOUS:
                this.setState({currentBlockIndex: block.index - 1});
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