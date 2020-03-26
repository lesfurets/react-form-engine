import * as React from "react";
import {EventServiceContext} from "../definition/event/service/access/EventServiceContext";
import {EventCallBack, EventService} from "../definition/event/service/EventService";

export interface NavigationContainerProps {
    onEvent: EventCallBack
}

export const EventManagerContainer: React.FunctionComponent<NavigationContainerProps> = ({onEvent, children}) => {
    const [eventMulticaster] = React.useState(() => new EventService(onEvent!));

    React.useEffect(() => eventMulticaster.subscribe(onEvent!), [onEvent]);

    return (
        <EventServiceContext.Provider value={eventMulticaster}>
            {children}
        </EventServiceContext.Provider>
    );
};
