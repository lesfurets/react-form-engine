import {setFieldValueAction} from "./actions";
import {connect, ConnectedComponentClass, InferableComponentEnhancerWithProps, Matching} from "react-redux";
import {Dispatch} from "redux";
import {FieldValueAction} from "./constants";
import {ComponentType, ElementType} from "react";
import {FieldContext} from "../FieldContext";

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
    setFieldValue: (id: string, value: any) => void
}

export const mapDispatchToProps = <P>(dispatch: Dispatch<FieldValueAction>, ownProps: P): P => {
    return {
        ... ownProps,
        setFieldValue: (id: string, value: string) => dispatch(setFieldValueAction(id, value)),
    }
};

export type FieldProps = FieldContextProps & FieldDispatchProps

export const fieldConnect: (element: ComponentType) => ConnectedComponentClass<ComponentType, any>  =
    (element: ComponentType) => connect(mapStateToProps, mapDispatchToProps)(element);