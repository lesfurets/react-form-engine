import React from "react";
import {createStore} from "redux";

import reducer from "../../../src/redux/reducers";
import {ERROR, initTest, shallow} from "../../../test/test-utils";
import {FieldWrapper} from "../../../src/component/wrapper/FieldWrapper";
import {BlockWrapper, BLOCK_EVENT} from "../../../src/component/wrapper/BlockWrapper";
import {VALID} from "../../../src/definition/validation";
import {Provider} from "react-redux";
import {mount} from "enzyme";

initTest();

describe("FormEngine/Wrapper/BlockWrapper", () => {
    let emptyCallback = () => {
    };

    let FieldView = ({children}) => (<div>{children}</div>);

    let BlockView = ({children, onValidation}) => (
        <div>
            <div>{children}</div>
            <button className="TestButton" onClick={onValidation}/>
        </div>
    );


    let store = createStore(reducer);


    describe("Fields", () => {
        it("Should render Fields by default", () => {
            let block = {
                id: "block-test",
                fields: [
                    {id: 'testChild1', type: 'type-test'},
                    {id: 'testChild2', type: 'type-test'},
                ]
            };
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block}
                                  onBlockEvent={emptyCallback}
                                  View={BlockView}
                                  FieldView={FieldView}/>
                </Provider>);
            expect(container.find(FieldWrapper).length).toBe(block.fields.length);
        });
    });

    describe("Validation", () => {

        let checkBlockValidation = (success, fields) => {
            let onBlockEvent = jasmine.createSpy();
            let block = {
                id: "block-test",
                fields: [
                    {id: 'testChild0', type: 'type-test', getValidate: () => VALID}
                ]
            };
            block.fields = block.fields.concat(fields);
            let container = mount(
                <Provider store={store}>
                    <BlockWrapper block={block}
                                  onBlockEvent={onBlockEvent}
                                  View={BlockView}
                                  FieldView={FieldView}/>
                </Provider>);
            container.find(".TestButton").simulate("click");
            if (success) {
                expect(onBlockEvent).toHaveBeenCalledWith(BLOCK_EVENT.VALID, block);
            } else {
                expect(onBlockEvent).not.toHaveBeenCalledWith(BLOCK_EVENT.BLOCK_EVENT, block);
            }
        };

        it("Should validate Field by default", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test'});
        });

        it("Should validate if Field is valid", () => {
            checkBlockValidation(true, {id: 'testChild1', type: 'type-test', getValidate: () => VALID});
        });

        it("Should validate if Field is visible and valid", () => {
            checkBlockValidation(true, {
                id: 'testChild1',
                type: 'type-test',
                isVisible: () => true,
                getValidate: () => VALID
            });
        });

        it("Should validate if Field in error if not visible", () => {
            checkBlockValidation(true, {
                id: 'testChild1',
                type: 'type-test',
                isVisible: () => false,
                getValidate: () => ERROR
            });
        });

        it("Should not validate if Field is visible and invalid", () => {
            let i = 0;
            checkBlockValidation(false, {id: 'testChild1', type: 'type-test', getValidate: () => ERROR});
        });

        it("Should validate if all Fields are valid", () => {
            checkBlockValidation(true, [
                {id: 'testChild1', type: 'type-test', getValidate: () => VALID},
                {id: 'testChild2', type: 'type-test', getValidate: () => VALID},
                {id: 'testChild3', type: 'type-test', getValidate: () => VALID}]);
        });

        it("Should not validate if 1 Fields is not valid", () => {
            checkBlockValidation(false, [
                {id: 'testChild1', type: 'type-test', getValidate: () => VALID},
                {id: 'testChild2', type: 'type-test', getValidate: () => ERROR},
                {id: 'testChild3', type: 'type-test', getValidate: () => VALID}]);
        });

    });

});