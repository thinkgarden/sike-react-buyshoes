const React = require("react");
const App = require("./components/App.js");

window.onload = () => {
  // Replace innerHTML of `#root` with the App component.
  React.render(<App/>,document.querySelector("#root"));
  console.log("page loaded");
}

