const React = require("react");
const enableLogging = require("./LoggingService");
const App = require("./components/App");

window.onload = () => {
  // Replace innerHTML of `#root` with the App component.
  enableLogging();
  React.render(<App/>,document.querySelector("#root"));
  console.log("page loaded");
}

