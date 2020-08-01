import React from "react";
import ReactDOM from "react-dom";

const fname = "Animish";
const lname = "Pande";

const img = "https://picsum.photos/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading">
      Hello, {fname} {lname}
    </h1>
    <div>
      <img src={img + "?blur=2"} alt="random"/>
    </div>
  </div>,
  document.getElementById("root")
);
