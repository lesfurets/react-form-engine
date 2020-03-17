import {FormEvent} from "../Event";
import {FormElement} from "../../model/FormElement";

export type EventCallBack = (event: FormEvent, source: FormElement, details: any) => void;

export class EventMulticaster {
    subscribers: EventCallBack[]  = [];

    constructor(callback?: EventCallBack) {
        this.subscribers = callback ? [callback] : [];
    }

    subscribe(callback: EventCallBack) {
        this.subscribers.push(callback);
        return () => this.unsubscribe(callback);
    }

    unsubscribe(callback: EventCallBack) {
        this.subscribers = this.subscribers.filter(subsCallback => subsCallback !== callback);
    }

    event(event: FormEvent, source: FormElement, details: any = null) {
        this.subscribers
            .forEach(subsCallback => subsCallback(event, source, details));
    }
}