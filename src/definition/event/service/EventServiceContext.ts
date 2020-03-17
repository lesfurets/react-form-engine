import * as React from "react";
import {EventService} from "./EventService";

export const EventServiceContext = React.createContext<EventService>(new EventService());