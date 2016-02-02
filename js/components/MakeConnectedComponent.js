const React = require("react");
const ConnectedStore = require("./ConnectedStore");

function MakeConnectedComponent(ViewComponent,store,...propNames) {
  // Note: The argument "ViewComponent" must be uppercase. Why?

  // TODO: Define ConnectedViewComponent
  //  {...this.props}为了兼容嵌套的使用
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
