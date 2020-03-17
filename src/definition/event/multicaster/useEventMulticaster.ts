import * as React from "react";
import {EventMulticaster} from "./EventMulticaster";
import {EventMulticasterContext} from "./EventMulticasterContext";

export const useEventMulticaster = () => React.useContext<EventMulticaster>(EventMulticasterContext);