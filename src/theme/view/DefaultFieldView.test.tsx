import * as React from "react";
import {shallow} from "enzyme";
import {DefaultFieldView} from "./DefaultFieldView";
import {FieldTypes} from "../../definition/FieldTypes";
import {initTest, mockUseField} from "../../_tests_/TestUtils";
import {FIELD_STATE} from "../../definition/model/Field";
import {useField} from "../../definition/model/access/useField";

initTest();

describe("FormEngine/View/DefaultFieldView", () => {

    let field = {id: "id-test", type: FieldTypes.INPUT_TEXT};

    describe("Label", () => {
        it("Should not display label by default", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView-label").length).toBe(0);
        });

        it("Should display label if specified", () => {
            const labelTest = "label-test";
            mockUseField({...field, label: labelTest});
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView-label").length).toBe(1);
            expect(container.find(".DefaultFieldView-label").text()).toEqual(labelTest);
        });
    });

    describe("Error", () => {
        it("Should not display error on state DEFAULT", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView-error").length).toBe(0);
        });

        it("Should not display error on state VALID", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.VALID}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView-error").length).toBe(0);
        });

        it("Should display error on state ERROR", () => {
            let errorMessage = "errorMessage";
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.ERROR}
                                                      errorMessage={errorMessage}/>);

            expect(container.find(".DefaultFieldView-error").length).toBe(1);
            expect(container.find(".DefaultFieldView-error").text()).toEqual(errorMessage);
        });
    });

    describe("VisibilityRule", () => {
        it("Should display field by default", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView").length).toBe(1);
        });

        it("Should display field if specified", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      isVisible={true}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView").length).toBe(1);
        });

        it("Should not display field if specified", () => {
            mockUseField(field);
            let container = shallow(<DefaultFieldView index={0}
                                                      fieldState={FIELD_STATE.DEFAULT}
                                                      isVisible={false}
                                                      errorMessage={""}/>);

            expect(container.find(".DefaultFieldView").length).toBe(0);
        });
    });

});