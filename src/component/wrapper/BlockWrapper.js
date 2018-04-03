import React from "react";
import PropTypes from "prop-types";

import FieldWrapper from "./FieldWrapper";
import BlockContainer from "../container/BlockContainer";

export const BLOCK_STATE = {
    TODO: "BLOCK-TODO",
    DOING: "BLOCK-DOING",
    DONE: "BLOCK-DONE"
};

class BlockWrapper extends React.Component {
    render() {
        let BlockContainer = this.props.container;
        return (
            <div className={`block-wrapper ${this.props.blockState.toLowerCase()}`}>
                <BlockContainer block={this.props.block} blockState={this.props.blockState}>
                    {this.props.block.fields.map((field, index) =>
                        <FieldWrapper
                            key={index}
                            field={field}
                            tabIndex={index + 1}
                        />)}
                </BlockContainer>
            </div>
        );
    }
}

BlockWrapper.propTypes = {
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    container: PropTypes.func,
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    container: BlockContainer
};

export default BlockWrapper;