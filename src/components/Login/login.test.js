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

    wrapper.find('FormControl[name="email"]').simulate("change", {
      target: { name: "email", value: "sai@gmail.com" },
    });

    expect(wrapper.find('FormControl[name="email"]').prop("value")).toEqual(
      "sai@gmail.com"
    );
  });

  it("Testing Password Input", () => {
    const wrapper = shallow(<Login />);

    wrapper.find('FormControl[name="password"]').simulate("change", {
      target: { name: "password", value: "hello" },
    });

    expect(wrapper.find('FormControl[name="password"]').prop("value")).toEqual(
      "hello"
    );
  });
});
