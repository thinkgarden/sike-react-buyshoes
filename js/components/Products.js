const React = require('react');
const {products} = require("../data.js");
const Product = require("./Product.js");
const ConnectedStore = require("./ConnectedStore");
const CartStore = require("../stores/CartStore");
const LikedStore = require("../stores/LikedStore");

let Products = React.createClass({
  render() {
    let {cartItems,likedItems} = this.props;
    let productNode = Object.keys(products).map(function (item,index) {
      // console.log(product,index);
      return (
        <Product key={index} product={products[item]} cartItems={cartItems} likedItems={likedItems}/>
      );
    });
    return (
      <div className="products">
        {productNode}
      </div>
    );
  }
});

let ConnectedProducts = React.createClass({
  render() {
    return (
      <ConnectedStore store={CartStore} propNames={["cartItems"]}>
        {propsOfCartStore => {
          return (
            <ConnectedStore store={LikedStore} propNames={["likedItems"]} >
              {propsOfLikeStore => <Products {...propsOfLikeStore} {...propsOfCartStore}/>}
            </ConnectedStore>
          )
        }}
      </ConnectedStore>
    );
  }
});

 module.exports = ConnectedProducts;
