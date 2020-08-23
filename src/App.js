import React, { useState } from "react";
import PersonList from "./PersonList";
import SharedButton from "./Pages/button/index";
import Listitem from "./Pages/listItem/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

function App() {
  const [people, setPeople] = useState("");

  

  fetch(){

  }

  return (
    <div>
      <PersonList people={people} />
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStatetoProps, { fetchPosts })(App);
