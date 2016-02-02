const React = require('react');
const ProductsStore = require("../stores/ProductsStore");
let SiteTitle = React.createClass({
  filterLike() {
    ProductsStore.toggleShowOnlyLike();
  },
  render() {
    let showOnlyLike = ProductsStore.isShowOnlyLike();
    return (
      <div className="title">
      <h2>Buy Some Shoes</h2>
      <img className="product__heart" src={ showOnlyLike ? 'img/heart-liked.svg' : 'img/heart.svg'} onClick={this.filterLike.bind(this)}/>
      </div>
    );
  }
});

module.exports = SiteTitle;
