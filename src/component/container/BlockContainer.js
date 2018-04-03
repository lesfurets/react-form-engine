import React from "react";

import PropTypes from "prop-types";
import {BLOCK_STATE} from "../wrapper/BlockWrapper";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container">
        <div className="block-label">{props.block.label}</div>
        <div className="block-inner">
            {props.blockState == BLOCK_STATE.DOING ? props.children : null}
        </div>
    </div>
);

BlockContainer.propTypes = {
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired
};

export default BlockContainer;

