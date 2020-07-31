import React from "react";
import ReactDOM from "react-dom";

const fname = "Animish";
const lname = "Pande";
const number = 0;

ReactDOM.render(
  <div>
    <h1 className="heading">
      Hello, {fname} {lname}
    </h1>
    <p>Your favourite number is {number}</p>
  </div>,
  document.getElementById("root")
);
