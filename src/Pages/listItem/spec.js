import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../Utils/index";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        title: "example Title",
        desc: "some text",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "example Title",
        desc: "some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should renders without error", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.lenght).toBe(1);
    });

    it("should render a title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.lenght).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "componentDesc");
      expect(desc.lenght).toBe(1);
    });
  });

  describe("should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "some text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("component is not rendered", () => {
      const component = findByTestAtrr(wrapper, " listItemComponent");
      expect(component.lenght).toBe(0);
    });
  });
});
