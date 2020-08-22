import React, { Component } from "react";
import Headline from "./headline/index";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bllogs",
    email: "jie@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

export default class Main extends Component {
  render() {
    return (
      <div>
        <section>
          <Headline
            header="Posts"
            desc="Click the btn to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}
