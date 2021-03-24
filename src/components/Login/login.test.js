import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

/* eslint no-undef: 0 */

describe("Testing Login Comonent", () => {
  it("Snapshot of Login Component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Testing Email Input", () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "sai@gmail.com" },
    });

    expect(wrapper.find("#email").prop("value")).toEqual("sai@gmail.com");
  });
});
