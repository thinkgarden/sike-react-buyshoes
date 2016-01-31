const React = require("react");
const SiteTitle = require("./SiteTitle");
const Products = require("./Products");
const Cart = require("./Cart");
const Checkout = require("./Checkout");

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
          <Cart/>
          <Checkout/>
        </div>

        <a className="site__right-sidebar-toggle" ref="sidebarTanggle" onClick={this.tanggleSideBar}>
          <img src="img/arrow-icon.svg"/>
        </a>
      </div>
    );
  }
});

module.exports = App;

