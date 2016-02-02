const React = require('react');
const Product = require("./Product.js");
const connect = require("./connect");
// const MakeConnectedComponent = require("./MakeConnectedComponent");
const CartStore = require("../stores/CartStore");
const LikedStore = require("../stores/LikedStore");
const ProductsStore = require("../stores/ProductsStore");

let Products = React.createClass({
  render() {
    let {filteredProducts,cartItems,likedItems} = this.props;
    let productNode = Object.keys(filteredProducts).map(function (item,index) {
      // console.log(product,index);
      return (
        <Product key={index} product={filteredProducts[item]} cartItems={cartItems} likedItems={likedItems}/>
      );
    });
    return (
      <div className="products">
        {productNode}
      </div>
    );
  }
});
@connect(ProductsStore,"filteredProducts")
@connect(LikedStore,"likedItems")
@connect(CartStore,"cartItems")
class ConnectedProducts extends Products {}
module.exports = ConnectedProducts;
