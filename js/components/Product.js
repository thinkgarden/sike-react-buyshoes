const React = require('react');
const QuantityControl = require("./QuantityControl");
const CartStore = require("../stores/CartStore");
const {addCartItem} = CartStore;
let Product = React.createClass({
  componentDidMount() {
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },
  onClick(productId) {
    addCartItem(productId);
  },
  render() {
    let {id,name,price,imagePath} = this.props.product;
    let cartItems = CartStore.getCartItems();
    return (
      <div className="product">
        <div className="product__display">
          <div className="product__img-wrapper">
            <img className="product__img" src={imagePath}/>
          </div>
          {(cartItems[id])? (
            <QuantityControl item={cartItems[id]} variant="gray"/>
          ): (
          <div class="product__control">
            <a className="product__add" onClick={this.onClick.bind(this,id)}>
              <img className="product__add__icon" src={"img/cart-icon.svg"}/>
            </a>
          </div>
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
