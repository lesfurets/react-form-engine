import * as React from "react";
import {EventMulticaster} from "./EventMulticaster";
import {EventContext} from "./EventContext";

export const useEvent = () => React.useContext<EventMulticaster>(EventContext);