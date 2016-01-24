const React = require('react');

let SiteTitle = React.createClass({
  render() {
    return (
      <div className="title">
      <h2>Buy Some Shoes</h2>
      <img className="product__heart" src={'img/heart-liked.svg'}/>
      </div>
    );
  }
});

module.exports = SiteTitle;
