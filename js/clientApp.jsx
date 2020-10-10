import React from "react";
import ReactDOM from "react-dom";

const MyTitle = function (props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function () {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger things" color="GreenYellow" />
      <MyTitle title="House of Cards" color="Peru" />
      <MyTitle title="Rick and Morty" color="burlywood" />
    </div>
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
