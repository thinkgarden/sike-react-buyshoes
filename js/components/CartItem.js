const React = require("react");
const ProductsStore = require("../stores/ProductsStore");
const CartStore = require("../stores/CartStore");
const {removeCartItem} = CartStore;
const QuantityControl = require("./QuantityControl");

let CartItem = React.createClass({
  componentDidMount(){
    CartStore.addChangeListener(this.forceUpdate.bind(this));
  },
  render() {
    let {item} = this.props;
    let {id,quantity} = this.props.item;
    let products = ProductsStore.products();
    return (
      <div className="cart-item">
        <div className="cart-item__top-part">
          <div className="cart-item__image">
            <img src={products[id].imagePath} />
          </div>
          <div className="cart-item__top-part__middle">
            <div className="cart-item__title">
              {id}
            </div>
            <div className="cart-item__price">
               {`$${products[id].price}` + ( (quantity > 1) ? ` × ${quantity}`:``) }
            </div>
          </div>
          <img className="cart-item__trash" onClick={removeCartItem.bind(this,id)} src={"img/trash-icon.svg"}/>
        </div>
        <div className="cart-item__qty">
          <QuantityControl item={item} variant="gray" />
        </div>
      </div>
    );
  }
});

module.exports = CartItem;
