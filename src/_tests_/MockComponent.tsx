import * as React from "react";
import {ReactWrapper, ShallowWrapper} from "enzyme";

type MockCallback = <T extends any>(props: T)=> void;

interface MockManager<T extends any> {
    component: React.FunctionComponent<T>
    handleMock: (container: ReactWrapper | ShallowWrapper, callback: MockCallback) => void
}

export const generateMock = <T extends any>() => {
    let Component: React.FunctionComponent = ({children}) => <>{children}</>;
    return {
        component: Component,
        handleMock: (container: ReactWrapper, callback: MockCallback) => callback(container.find(Component).props())
    } as MockManager<T>
};

export const MockComponent: React.FunctionComponent = ({children}) => <>{children}</>;

export const triggerCallback = (container: ReactWrapper, callback: (props: any) => void) => {
    callback(container.find(MockComponent).props());
};

export const testProps = (container: ReactWrapper, testProps: (props: any) => void) => {
    testProps(container.find(MockComponent).props());
};