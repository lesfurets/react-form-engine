import React from "react";

import PropTypes from "prop-types";
import {BLOCK_EVENT, BLOCK_STATE} from "../wrapper/BlockWrapper";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container app-row">
        <div className="block-header app-col-xs-12">
            <div className="block-label">{props.blockIndex + 1}. {props.block.label}</div>
        </div>
        {props.blockState != BLOCK_STATE.DOING ? null : (
            <div className="app-col-xs-12 app-col-sm-8">
                <div className="block-inner">
                    {props.children}
                    <div className="cta-layer">
                        {props.blockIndex > 0 ? <button className="cta secondary-cta" onClick={() => props.onBlockEvent(BLOCK_EVENT.PREVIOUS, props.blockIndex)}>Previous</button> : null}
                        <button className="cta principal-cta " onClick={() => props.onBlockEvent(BLOCK_EVENT.NEXT, props.blockIndex)}>Next</button>
                    </div>
                </div>
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

