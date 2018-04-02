import React from "react";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container">
        <div className="block-label">{props.block.label}</div>
        <div className="block-inner">
            {props.children}
        </div>
    </div>
);

export default BlockContainer;

