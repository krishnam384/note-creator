import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";

/* eslint no-undef: 0 */

describe("Testing Error Component", () => {
  it("Snapshot Testing of Error Component", () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });

  // it("Snapshot Testing of Error Component", () => {
  //   const wrapper = shallow(<Error error='Page Not Found' />);

  //   expect(wrapper.prop("error")).toEqual("Page Not Found");
  // });
});
