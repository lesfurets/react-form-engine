import React from "react";
import PropTypes from "prop-types";

import FieldWrapper from "./FieldWrapper";
import BlockContainer from "../container/BlockContainer";

class BlockWrapper extends React.Component {
    render() {
        let BlockContainer = this.props.container;
        return (
            <BlockContainer block={this.props.block}>
                {this.props.block.fields.map((field, index) =>
                    <FieldWrapper
                        key={index}
                        field={field}
                        tabIndex={index + 1}
                    />)}
            </BlockContainer>
        );
    }
}

BlockWrapper.propTypes = {
    block: PropTypes.object.isRequired,
    container: PropTypes.func,
};

BlockWrapper.defaultProps = {
    container: BlockContainer
};

export default BlockWrapper;