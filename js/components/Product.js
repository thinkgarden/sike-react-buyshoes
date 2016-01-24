const React = require('react');
const {cartItems} = require("../data.js");
const QuantityControl = require("./QuantityControl.js");

let Product = React.createClass({
  render() {
    let {id,name,price,imagePath} = this.props.product;
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath}/>
          </div>
          {(cartItems[id])? (
            <QuantityControl item={cartItems[id]} variant="gray"/>
          ): (
            <a className="product__add">
              <img className="product__add__icon" src={"img/cart-icon.svg"}/>
            </a>
          )}

          <div className="product__price">
            {`$${price}`}
          </div>
        </div>

        <div className="product__description">
          <div className="product__name">
            {name}
          </div>
          <img className="product__heart" src={"img/heart.svg"}/>
        </div>
      </div>
    );
  }
});

module.exports = Product;
