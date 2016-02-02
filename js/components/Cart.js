const React = require('react');
const connect = require("./connect");
const CartStore = require("../stores/CartStore");
const CartItem = require("./CartItem");
const Ps = require("perfect-scrollbar");
let Cart  = React.createClass({
  componentDidMount(){
    let $perfectScroll = React.findDOMNode(this.refs.perfectScroll);
    Ps.initialize($perfectScroll);
  },

  render() {
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

@connect(CartStore,"cartItems")
class ConnectedCart extends Cart {}

module.exports = ConnectedCart;


