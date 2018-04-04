import React from "react";
import renderer from "react-test-renderer";

import Component from "./index";

describe("GridMobile", () => {
  it("should match the snapshot", () => {
    const component = renderer.create(<Component />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
