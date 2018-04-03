import React from "react";
import PropTypes from "prop-types";

import FieldWrapper from "./FieldWrapper";
import BlockContainer from "../container/BlockContainer";

export const BLOCK_STATE = {
    TODO: "BLOCK-TODO",
    DOING: "BLOCK-DOING",
    DONE: "BLOCK-DONE"
};

export const BLOCK_EVENT = {
    NEXT: "NEXT",
    PREVIOUS: "PREVIOUS",
};

class BlockWrapper extends React.Component {
    render() {
        let Container = this.props.container;
        return (
            <div className={`block-wrapper ${this.props.blockState.toLowerCase()}`}>
                <Container {...this.props}>
                    {this.props.block.fields.map((field, index) =>
                        <FieldWrapper
                            key={index}
                            field={field}
                            tabIndex={index + 1}
                        />)}
                </Container>
            </div>
        );
    }
}

BlockWrapper.propTypes = {
    blockIndex: PropTypes.number,
    onBlockEvent: PropTypes.func.isRequired,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired,
    container: PropTypes.func,
};

BlockWrapper.defaultProps = {
    blockState: BLOCK_STATE.DOING,
    container: BlockContainer
};

export default BlockWrapper;