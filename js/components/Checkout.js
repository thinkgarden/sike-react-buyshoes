const React = require("react");
const connect = require("./connect");
const CartStore = require("../stores/CartStore");
const ProductsStore = require("../stores/ProductsStore");
let Checkout  = React.createClass({
  render() {
    let {cartItems,products} = this.props;
    let subtotal = 0;
    Object.keys(cartItems).forEach(key=>{
      let {quantity} = cartItems[key];
      let {price} = products[key];
      subtotal += price * quantity;
    })
    return (
      <div className="checkout">
        <hr className="checkout__divider"/>
        <input type="text" className="checkout__coupon-input" placeholder="coupon code"></input>
        <div className="checkout__line">
            <div className="checkout__line__label">Subtotal</div>
            <div className="checkout__line__amount"> {`$${subtotal.toFixed(2)}`}</div>
        </div>
        <a className="checkout__button">
            <img className="checkout__button__icon" src={"img/cart-icon.svg"}/>
            <div className="checkout__button__label">Checkout</div>
        </a>
      </div>
    );
  }
});
@connect(CartStore, "cartItems")
@connect(ProductsStore, "products")
class ConnectedCheckout extends Checkout{}
module.exports = ConnectedCheckout;
