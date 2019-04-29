import {FormEvent} from "./Event";
import {FormElement} from "../FormModel";

type EventCallBack = (event: FormEvent, source: FormElement, details: any) => {};
type EventFilter = (event: FormEvent, source: FormElement, details: any) => boolean;

const universalMatcher: EventFilter = () => true;

class EventSubscriber {
    callback: EventCallBack;
    idFilter: EventFilter;

    constructor(callback: EventCallBack, idFilter: EventFilter) {
        this.callback = callback;
        this.idFilter = idFilter;
    }
}

export class EventMulticaster {
    subscribers: EventSubscriber[]  = [];

    subscribe(callback: EventCallBack) {
        this.subscribers.push(new EventSubscriber(callback, universalMatcher));
    }

    subscribeForElements(callback: EventCallBack, elements: FormElement[]) {
        let elementMatcher: EventFilter = (event: FormEvent, source: FormElement) => elements.some(element => source === element);
        this.subscribers.push(new EventSubscriber(callback, elementMatcher));
    }

    unsubscribe(callback: EventCallBack) {
        this.subscribers = this.subscribers.filter(subs => subs.callback !== callback);
    }

    event(event: FormEvent, source: FormElement, details: any) {
        this.subscribers
            .filter(subs => subs.idFilter(event, source, details))
            .forEach(subs => subs.callback(event, source, details));
    }
}

export const EVENT_MULTICASTER = new EventMulticaster();