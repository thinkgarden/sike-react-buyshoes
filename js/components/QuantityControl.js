const React = require("react");
let QuantityControl = React.createClass({
  render(){
    let quantity = this.props.item.quantity;
    let variant = this.props.variant;
    return(
      <div className={"adjust-qty" + ((variant) ? ` adjust-qty--${variant}`:``)}>
        <a className="adjust-qty__button">-</a>
        <div className="adjust-qty__number">{quantity}</div>
        <a className="adjust-qty__button">+</a>
      </div>
    )
  }
});
module.exports = QuantityControl;
