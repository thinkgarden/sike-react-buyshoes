const React = require("react");
const {cartItems,products} = require("../data.js");
const QuantityControl = require("./QuantityControl.js");

let CartItem = React.createClass({
  render() {
    let {id,quantity} = this.props.cartitem;
    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={products[id].imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {id}
            </div>
            <div className="cart-item__price">
               {`$${products[id].price}` + ( (quantity > 1) ? ` × ${quantity}`:``) }
            </div>
          </div>
          <img className="cart-item__trash" src={"img/trash-icon.svg"}/>
        </div>
        <div className="cart-item__qty">
          <QuantityControl item={cartItems[id]} variant="gray" />
        </div>
      </div>
    );
  }
});

module.exports = CartItem;
