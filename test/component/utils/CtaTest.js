import React from "react";
import {shallow} from "enzyme";
import {initTest} from "../../test-utils";
import {Cta, CTA_TYPE} from "../../../src/component/utils/Cta";

initTest();

describe("FormEngine/Utils/Cta", () => {

    describe("Type", () => {
        it("Should have type PRIMARY by default", () => {
            // Given
            let container = shallow(<Cta/>);

            // Then
            expect(container.find(`.${CTA_TYPE.PRIMARY}`).length).toBe(1);
            expect(container.find(`.${CTA_TYPE.SECONDARY}`).length).toBe(0);
        });

        it("Should have specified type", () => {
            // Given
            let container = shallow(<Cta type={CTA_TYPE.SECONDARY}/>);

            // Then
            expect(container.find(`.${CTA_TYPE.PRIMARY}`).length).toBe(0);
            expect(container.find(`.${CTA_TYPE.SECONDARY}`).length).toBe(1);
        });
    });

    describe("Click", () => {
        it("Should trigger onClick call", () => {
            // Given
            let onClick = jasmine.createSpy();
            let container = shallow(<Cta onClick={onClick}/>);

            // When
            container.simulate("click");

            // Then
            expect(onClick).toHaveBeenCalled();
        });
    });

    describe("ClassName", () => {
        it("Should have className", () => {
            // Given
            let className = "className";
            let container = shallow(<Cta className={className}/>);

            // Then
            expect(container.find(`.${className}`).length).toBe(1);
        });
    });

});