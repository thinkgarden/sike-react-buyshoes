const React = require('react');

let ConnectedStore = React.createClass({
  componentDidMount() {
    let store = this.props.store;
    store.addChangeListener(this.forceUpdate.bind(this));
  },
  render() {
    // The `children` property is a function.
    let contentRenderFunction = this.props.children;
    let storeProps = {};
    let {store, propNames }= this.props;
    propNames.forEach(name=>{
      storeProps[name] = store[name]();
    });
    return contentRenderFunction(storeProps);
  }
});

module.exports = ConnectedStore;
