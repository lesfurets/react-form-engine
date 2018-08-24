import React from "react";
import {initTest} from "../../test-utils";
import {EventMulticaster} from "../../../src/definition/event/EventMulticaster";

initTest();

describe("FormEngine/Definition/EventMulticaster", () => {

    let event = "event";
    let source = {id: "id"};
    let details = "details";

    describe("subscribe", () => {
        it("Should notify subscribers", () => {
            // Given
            let eventMulticaster = new EventMulticaster();
            let callback = jasmine.createSpy();
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
            let eventMulticaster = new EventMulticaster();
            let callback = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callback, [source]);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            // expect(callback).toHaveBeenCalledWith(event, source, details);
        });

        it("Should notify subscribers", () => {
            // Given
            let eventMulticaster = new EventMulticaster();
            let idTest = {id: "idTest"};
            let callback = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callback, [idTest]);

            let callbackTemoin = jasmine.createSpy();
            eventMulticaster.subscribeForElements(callbackTemoin, [idTest, source]);

            // When
            eventMulticaster.event(event, source, details);

            // Then
            expect(callback).not.toHaveBeenCalled();
            expect(callbackTemoin).toHaveBeenCalledWith(event, source, details);
        });
    });

});