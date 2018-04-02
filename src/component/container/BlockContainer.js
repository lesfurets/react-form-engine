import React from "react";

import "../../styles/block-container.less"

const BlockContainer = props => (
    <div className="block-container">
        {props.children}
    </div>
);

export default BlockContainer;

