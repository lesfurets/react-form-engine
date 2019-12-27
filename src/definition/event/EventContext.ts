import * as React from "react";
import {EventMulticaster} from "./EventMulticaster";

export const EventContext = React.createContext<EventMulticaster>(new EventMulticaster());