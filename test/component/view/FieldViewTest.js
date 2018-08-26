import React from "react";
import {shallow} from "enzyme";
import {initTest} from "../../test-utils";
import {FieldView} from "../../../src/component/view/FieldView";
import {FIELD_STATE} from "../../../src/component/wrapper/FieldWrapper";

initTest();

describe("FormEngine/View/FieldView", () => {

    let field = {id: "id-test", type: "type-test"};
    describe("Label", () => {
        it("Should not display label by default", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView-label").length).toBe(0);
        });

        it("Should display label if specified", () => {
            const labelTest = "label-test";
            let container = shallow(<FieldView field={{...field, label: labelTest}}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView-label").length).toBe(1);
            expect(container.find(".FieldView-label").text()).toEqual(labelTest);
        });
    });

    describe("Error", () => {
        it("Should not display error on state DEFAULT", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView-error").length).toBe(0);
        });

        it("Should not display error on state VALID", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.VALID}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView-error").length).toBe(0);
        });

        it("Should display error on state ERROR", () => {
            let errorMessage = "errorMessage";
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.ERROR}
                                               errorMessage={errorMessage}/>);

            expect(container.find(".FieldView-error").length).toBe(1);
            expect(container.find(".FieldView-error").text()).toEqual(errorMessage);
        });
    });

    describe("VisibilityRule", () => {
        it("Should display field by default", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView").length).toBe(1);
        });

        it("Should display field if specified", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               isVisible={true}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView").length).toBe(1);
        });

        it("Should not display field if specified", () => {
            let container = shallow(<FieldView field={field}
                                               fieldState={FIELD_STATE.DEFAULT}
                                               isVisible={false}
                                               errorMessage={""}/>);

            expect(container.find(".FieldView").length).toBe(0);
        });
    });

});