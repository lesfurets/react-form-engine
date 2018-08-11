import React from "react";
import {shallow} from "enzyme";
import {EmailField} from "../../../src/component/field/EmailField";
import {initTest} from "../../test-utils";
import {Cta, CTA_TYPE} from "../../../src/component/utils/Cta";
import {BLOCK_EVENT} from "../../../src/component/wrapper/BlockWrapper";

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

});