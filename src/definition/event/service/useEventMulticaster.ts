import * as React from "react";
import {EventService} from "./EventService";
import {EventServiceContext} from "./EventServiceContext";

export const useEventMulticaster = () => React.useContext<EventService>(EventServiceContext);