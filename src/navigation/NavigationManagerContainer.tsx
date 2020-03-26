import * as React from "react";
import {useNavigationManager} from "../definition/navigation/useNavigationManager";
import {NavigationContext} from "../definition/navigation/NavigationContext";
import {FormElement} from "..";

export interface NavigationContainerProps {
    initialStep: FormElement,
}

export const NavigationManagerContainer: React.FunctionComponent<NavigationContainerProps> = ({initialStep, children}) => {
    const navigationManager = useNavigationManager(initialStep);

    return (
        <NavigationContext.Provider value={navigationManager}>
            {children}
        </NavigationContext.Provider>
    );
};
