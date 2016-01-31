const React = require("react");
const ConnectedStore = require("./ConnectedStore");

function MakeConnectedComponent(ViewComponent,store,...propNames) {
  // Note: The argument "ViewComponent" must be uppercase. Why?

  // TODO: Define ConnectedViewComponent
  class ConnectedViewComponent extends React.Component {
    render(){
      return(
        <ConnectedStore store={store} propNames={propNames} >
          { prop => <ViewComponent {...prop} {...this.props} /> }
        </ConnectedStore>
      )
    }
  };

  // Return the component
  return ConnectedViewComponent;
}

module.exports = MakeConnectedComponent;
