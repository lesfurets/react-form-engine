import React from "react";

import "../../styles/form-container.less"

const FormContainer = (props) => (
            <div className="form-container">
                {props.children}
            </div>
)

export default FormContainer;