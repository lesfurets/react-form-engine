import {setFieldValueAction} from "./actions";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FieldValueAction} from "./constants";
import {ComponentType} from "react";
import {FieldContext} from "../definition/FieldContext";

export interface FieldContextProps {
    fieldContext: FieldContext
}

export const mapStateToProps = <P>(state: FieldContext, ownProps: P): P => {
    return {
        ...ownProps,
        fieldContext: state.fieldContext,
    }
};

export interface FieldDispatchProps {
    setFieldValue: (id: string, value: string) => void
}

export const mapDispatchToProps = <P>(dispatch: Dispatch<FieldValueAction>, ownProps: P): P => {
    return {
        ... ownProps,
        setFieldValue: (id: string, value: string) => dispatch(setFieldValueAction(id, value)),
    }
};

export type FieldProps = FieldContextProps & FieldDispatchProps

// export function fieldConnect<P extends FieldProps, C extends ComponentType<P>>(element: C) {
//     return connect(mapStateToProps, mapDispatchToProps)(element)
// }