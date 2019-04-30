import {EventCallBack} from "./event/EventMulticaster";
import {FormEvent} from "./event/Event";
import {FormElement} from "./FormModel";

export const EMPTY_CALLBACK : EventCallBack = (event: FormEvent, source: FormElement, details: any) => {};
