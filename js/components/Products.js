const React = require('react');
const {products} = require("../data.js");
const Product = require("./Product.js");

let Products = React.createClass({
  render() {
    let productNode = Object.keys(products).map(function (item,index) {
      // console.log(product,index);
      return (
        <Product key={index} product={products[item]}/>
      );
    });
    return (
      <div className="products">
        {productNode}
      </div>
    );
  }
});

 module.exports = Products;
