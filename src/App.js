import React, { useState } from "react";
import PersonList from "./PersonList";

function App() {
  const [people, setPeople] = useState("");
  return (
    <div>
      <PersonList />
    </div>
  );
}

export default App;
