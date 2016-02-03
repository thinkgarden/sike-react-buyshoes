const React = require("react");
const action = require("../action");
const {updateCartItemQuantity} = action;
let QuantityControl = React.createClass({
  onClick(productId, quantity) {
    if (quantity > 0) {
      updateCartItemQuantity(productId,quantity);
    }
  },
  render(){
    let {id, quantity} = this.props.item;
    let variant = this.props.variant;
    return(
      <div className="product__control">
        <div className={"adjust-qty" + ((variant) ? ` adjust-qty--${variant}`:``)}>
          <a className="adjust-qty__button" onClick={this.onClick.bind(this,id,quantity-1)}>-</a>
          <div className="adjust-qty__number">{quantity}</div>
          <a className="adjust-qty__button" onClick={this.onClick.bind(this,id,quantity+1)}>+</a>
        </div>
      </div>
    )
  }
});
module.exports = QuantityControl;
