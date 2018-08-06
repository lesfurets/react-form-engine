import React from "react";
import PropTypes from "prop-types";

import {BLOCK_EVENT, BLOCK_STATE} from "../wrapper/BlockWrapper";

import "../../styles/components/view/block-view.less"
import {Cta, CTA_TYPE} from "../utils/Cta";

export const BlockView = ({children, block, blockState, onEvent, onValidation}) => (
    <div className="BlockView app-row">
        <div className="BlockView-label app-col-xs-12">{block.index + 1}. {block.label}</div>
        {blockState !== BLOCK_STATE.DOING ? null : (
            <div className="app-col-xs-12 app-col-sm-8">
                <div className="BlockView-content">
                    {children}
                    <div className="app-row">
                        <div className="app-col-xs-12 app-col-sm-3">
                            {block.index === 0 ?
                                null : <Cta type={CTA_TYPE.SECONDARY}
                                            fullWidth={true}
                                            onClick={() => onEvent(BLOCK_EVENT.PREVIOUS)}>Previous</Cta>}
                        </div>
                        <div className="app-col-xs-12 app-col-sm-3 app-col-sm-offset-6">
                            <Cta fullWidth={true} onClick={onValidation}>{block.ctaLabel || "Next"}</Cta>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);

BlockView.propTypes = {
    block: PropTypes.object.isRequired,
    blockState: PropTypes.string.isRequired,
    onValidation: PropTypes.func,
    onEvent: PropTypes.func
};