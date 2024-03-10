import React from "react";
import ReactDOM from "react-dom/client";

// TODO: React.createElement => ReactElement(JS object) => HTMLElement(Render)
// const heading = React.createElement("h1", {}, "Hello World 🚀");

// HTML & JSX & React all are different
// JSX is HTML-like or XML-like syntax
// JSX Code is transpiled by Babel before it reaches the JS Engine
//TODO: JSX => React.createElement => ReactElement(JS object) => HTMLElement(Render)

const Title = () => <h1 className="head">Hi ALL!</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste World!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
