const React = require('react');
const QuantityControl = require("./QuantityControl");
const CartStore = require("../stores/CartStore");
const {addCartItem} = CartStore;
const LikedStore = require("../stores/LikedStore");

let Product = React.createClass({

  onClick(productId) {
    addCartItem(productId);
  },
  heartClick(productId) {
    let {likedItems} = this.props;
    if(!likedItems[productId]){
      LikedStore.addLikedItem(productId);
    }
    else{
      LikedStore.removeLikedItem(productId);
    }

  },
  render() {
    let {cartItems, likedItems} = this.props;
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
          <div className="product__control">
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
          {(likedItems[id])?( <img className="product__heart" onClick={this.heartClick.bind(this,id)} src={"img/heart-liked.svg"}/>):( <img className="product__heart" onClick={this.heartClick.bind(this,id)} src={"img/heart.svg"}/>)}

        </div>
      </div>
    );
  }
});

module.exports = Product;
