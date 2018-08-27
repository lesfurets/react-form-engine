import React from "react";
import PropTypes from "prop-types";
import {FieldSelector} from "./FieldSelector";

export const FieldDetailEditor = ({details, fieldList, onChange}) => (
    <FieldSelector field={details.otherId}
                   fieldList={fieldList}
                   onChange={(fieldId) => onChange({otherId: fieldId})}/>);

FieldDetailEditor.propTypes = {
    details: PropTypes.object,
    fieldList: PropTypes.array,
    onChange: PropTypes.func
};