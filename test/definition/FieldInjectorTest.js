import React from "react";
import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import TextField from "../../src/component/fields/TextField";
import {INPUT_TEXT} from "../../src/definition/field-type";
import {FieldInjector, UNKNOWN_FIELD} from "../../src/definition/FieldInjector";

configure({adapter: new Adapter()});

describe("FormEngine/Definition/FieldInjector", () => {

  describe("Mapping", () => {

    it("Should display TextField on INPUT_TEXT", () => {
      expect(FieldInjector.inject(INPUT_TEXT)).toBe(TextField)
    });

    it("Should display nothing on unknown field", () => {
      expect(FieldInjector.inject("unexpected")).toBe(UNKNOWN_FIELD)
    });

  });
});