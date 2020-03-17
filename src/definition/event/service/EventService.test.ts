import {EventService} from "./EventService";
import {EventTypes, FormEvent} from "../Event";
import {FormElement} from "../../model/FormElement";

describe("FormEngine/Definition/EventMulticaster", () => {

    const event: FormEvent = {
        id: "event",
        type: EventTypes.Form
    };
    const source: FormElement = {id: "id"};
    const details = "details";

    describe("subscribe", () => {
        it("Should notify subscribers", () => {
            // Given
            const eventMulticaster = new EventService();
            const callback = jasmine.createSpy();
            eventMulticaster.subscribe(callback);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).toHaveBeenCalledWith(event, source, details);
        });

        it("Should return unsubscribe when subscribing", () => {
            // Given
            const eventMulticaster = new EventService();
            const callback = jasmine.createSpy();
            const unsubscribe = eventMulticaster.subscribe(callback);
            unsubscribe();

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).not.toHaveBeenCalledWith();
        });
    });

    describe("unsubscribe", () => {
        it("Should not notify after unsubscribe", () => {
            // Given
            const eventMulticaster = new EventService();
            const callback = jasmine.createSpy();
            eventMulticaster.subscribe(callback);
            eventMulticaster.unsubscribe(callback);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).not.toHaveBeenCalledWith();
        });
    });

});