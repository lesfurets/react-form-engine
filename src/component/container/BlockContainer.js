import React from "react";

import PropTypes from "prop-types";
import {BLOCK_EVENT, BLOCK_STATE} from "../wrapper/BlockWrapper";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container">
        <div className="block-label">{props.blockIndex + 1}. {props.block.label}</div>
            {props.blockState != BLOCK_STATE.DOING ? null : (
                <div className="block-inner">
                    {props.children}
                    {props.blockIndex > 0 ? <div className="cta-button" onClick={() => props.onBlockEvent(BLOCK_EVENT.PREVIOUS,props.blockIndex)}>Previous</div> : null}
                    <div className="cta-button" onClick={() => props.onBlockEvent(BLOCK_EVENT.NEXT,props.blockIndex)}>Next</div>
                </div>
            )}
    </div>
);

BlockContainer.propTypes = {
    blockIndex: PropTypes.number,
    blockState: PropTypes.string,
    block: PropTypes.object.isRequired
};

export default BlockContainer;

