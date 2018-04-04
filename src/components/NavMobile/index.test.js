import React from "react";
import renderer from "react-test-renderer";

import Component from "./index";

describe("NavMobile", () => {
  it("should match the snapshot", () => {
    let component = renderer.create(<Component />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
