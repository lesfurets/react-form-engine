import * as React from "react";
import {NavigationManager} from "./NavigationManager";

export const NavigationContext = React.createContext<NavigationManager>({} as NavigationManager);