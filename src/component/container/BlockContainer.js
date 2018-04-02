import React from "react";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container">
        <div className="block-label">{props.block.label}</div>
        {props.children}
    </div>
);

export default BlockContainer;

