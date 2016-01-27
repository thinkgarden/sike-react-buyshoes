const React = require('react');
const CartItem = require("./CartItem.js");
const CartStore = require("../stores/CartStore");
const Ps = require("perfect-scrollbar");
let Cart  = React.createClass({
  componentDidMount(){
    let $perfectScroll = React.findDOMNode(this.refs.perfectScroll);
    Ps.initialize($perfectScroll);
    CartStore.addChangeListener(this.forceUpdate.bind(this))
  },

  render() {
    let cartItems = CartStore.getCartItems();
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

module.exports = Cart;
