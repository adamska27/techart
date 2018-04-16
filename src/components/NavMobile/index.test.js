import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';

import Component from "./index";

describe("NavMobile", () => {
  it("should match the snapshot", () => {
    let component = renderer.create(<MemoryRouter><Component /></MemoryRouter>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
