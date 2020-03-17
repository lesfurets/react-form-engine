import * as React from "react";
import {EventMulticaster} from "./EventMulticaster";

export const EventMulticasterContext = React.createContext<EventMulticaster>(new EventMulticaster());