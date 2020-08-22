import Headline from "../headline/index";
import { checkProps } from "../../Utils/index";

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
    const propsErr = checkProps(Headline, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});
