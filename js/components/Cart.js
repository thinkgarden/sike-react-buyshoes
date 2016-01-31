const React = require('react');
const MakeConnectedComponent = require("./MakeConnectedComponent");
const CartStore = require("../stores/CartStore");
const CartItem = require("./CartItem");
const Ps = require("perfect-scrollbar");
let Cart  = React.createClass({
  componentDidMount(){
    let $perfectScroll = React.findDOMNode(this.refs.perfectScroll);
    Ps.initialize($perfectScroll);
    // let store = this.props.store;
    // store.addChangeListener(this.forceUpdate.bind(this));
  },

  render() {
    // let cartItems = CartStore.getCartItems();
    let {cartItems} = this.props;
    return (
      <div className="cart">
        <h3 className="cart__title">Shopping Cart</h3>
        <div className="cart__content" ref="perfectScroll">
          <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
          {Object.keys(cartItems).map((item, index) => (
            <CartItem key={index} item={cartItems[item]}/>
            )
          )}
        </div>
      </div>
    );
  }
});

// let ConnectedCart = React.createClass({
//   render() {
//     return (
//       <ConnectedStore store={CartStore} propNames={["cartItems"]}>
//         {propValues => <Cart {...propValues}/>}
//       </ConnectedStore>
//     );
//   }
// });

module.exports = MakeConnectedComponent(Cart,CartStore,"cartItems");



