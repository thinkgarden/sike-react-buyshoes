const React = require("react");
const {products, cartitems} = require("../data.js");
const SiteTitle = require("./SiteTitle.js");
const Products = require("./Products.js");
const Cart = require("./Cart.js");
const Checkout = require("./Checkout.js");



let App =  React.createClass({
  tanggleSideBar(){
    document.body.classList.toggle("js-show-right-sidebar");
  },
  render() {
    return (
      <div className="site">
        <div className="bg">
          <div className="bg__img">
          </div>
        </div>

        <div className="site__main">
          <div className="site__left-sidebar">
            <SiteTitle/>
          </div>

          <div className="site__content">
            <Products/>
          </div>
        </div>

        <div className="site__right-sidebar">
          <Cart />
          <Checkout />
        </div>

        <a className="site__right-sidebar-toggle" ref="sidebarTanggle" onClick={this.tanggleSideBar}>
          <img src="img/arrow-icon.svg"/>
        </a>
      </div>
    );
  }
});

module.exports = App;

