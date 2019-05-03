import {EventMulticaster} from "../../../src/definition/event/EventMulticaster";
import {EventTypes, FormEvent} from "../../../src/definition/event/Event";
import {FormElement} from "../../../src/definition/FormModel";

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
            const eventMulticaster = new EventMulticaster();
            const callback = jasmine.createSpy();
            eventMulticaster.subscribe(callback);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).toHaveBeenCalledWith(event, source, details);
        });
    });

    describe("subscribeForElement", () => {
        it("Should notify if subcribed to id", () => {
            // Given
            const eventMulticaster = new EventMulticaster();
            const callback = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callback, [source]);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            // expect(callback).toHaveBeenCalledWith(event, source, details);
        });

        it("Should notify subscribers", () => {
            // Given
            const eventMulticaster = new EventMulticaster();
            const idTest: FormElement = {id: "idTest"};
            const callback = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callback, [idTest]);

            const callbackTemoin = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callbackTemoin, [idTest, source]);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).not.toHaveBeenCalled();
            expect(callbackTemoin).toHaveBeenCalledWith(event, source, details);
        });
    });

});