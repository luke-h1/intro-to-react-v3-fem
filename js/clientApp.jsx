import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function (props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function () {
  return ce(
    "div",
    null,
    ce(MyTitle, {
      title: "Game of thrones",
      color: "YellowGreen",
    }),
    ce(MyTitle, {
      title: "Stranger things",
      color: "GreenYellow",
    }),
    ce(MyTitle, {
      title: "Rick & Morty",
      color: "LimeGreen",
    }),
    ce(MyTitle, {
      title: "Silicon valley",
      color: "Lime",
    })
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
