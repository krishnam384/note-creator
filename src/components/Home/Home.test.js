import { shallow } from "enzyme";
import React from "react";
import Home from "./Home";

/* eslint no-undef: 0 */

const home = shallow(<Home />);
it("First snapshot", () => {
  expect(home).toMatchSnapshot();
});
