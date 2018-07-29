import React from "react";

import PropTypes from "prop-types";
import {BLOCK_EVENT, BLOCK_STATE} from "../wrapper/BlockWrapper";

import "../../styles/components/view/block-view.less"

export const BlockView = ({children, block, blockState, onBlockEvent, validate}) => (
    <div className="BlockView app-row">
        <div className="BlockView-label app-col-xs-12">{block.index + 1}. {block.label}</div>
        {blockState !== BLOCK_STATE.DOING ? null : (
            <div className="app-col-xs-12 app-col-sm-8">
                <div className="BlockView-content">
                    {children}
                    <div className="cta-layer">
                        {block.index > 0 ? <button className="cta secondary-cta" onClick={() => onBlockEvent(BLOCK_EVENT.PREVIOUS)}>Previous</button> : null}
                        <button className="cta principal-cta " onClick={validate}>Next</button>
                    </div>
                </div>
            </div>
        )}
    </div>
);

BlockView.propTypes = {
    block: PropTypes.object.isRequired,
    blockState: PropTypes.string.isRequired,
    validate: PropTypes.func,
    onBlockEvent: PropTypes.func
};