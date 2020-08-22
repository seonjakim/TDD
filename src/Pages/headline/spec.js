import Headline from "../headline/index";
import checkPropTypes from "check-prop-types";

describe("Checking PropTypes", () => {
  it("should not throw a warning", () => {
    const expectedProps = {
      header: "test header",
      desc: "test desc",
      tempArr: [
        {
          fName: "test",
          lName: "test lName",
          email: "test@emgail",
          age: 23,
          onlineStatus: false,
        },
      ],
    };
    const propsErr = checkPropTypes(
      Headline.propTypes,
      expectedProps,
      "props",
      Headline.name
    );
    expect(propsErr).toBeUndefined();
  });
});
