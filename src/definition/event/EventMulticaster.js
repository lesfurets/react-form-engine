const UniversalMatcher = {
    includes() {
        return true;
    }
};

class Subscriber {
    constructor(callback, idFilter) {
        this.callback = callback;
        this.idFilter = idFilter;
    }
}

export class EventMulticaster {
    subscribers = [];

    subscribe(callback) {
        this.subscribers.push(new Subscriber(callback, UniversalMatcher));
    }

    subscribeForElements(callback, elements) {
        this.subscribers.push(new Subscriber(callback, elements.map(element => element.id)));
    }

    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(subs => subs.callback !== callback);
    }

    event(event, source, details) {
        this.subscribers
            .filter(subs => subs.idFilter.includes(source.id))
            .forEach(subs => subs.callback(event, source, details));
    }
}

export const EVENT_MULTICASTER = new EventMulticaster();