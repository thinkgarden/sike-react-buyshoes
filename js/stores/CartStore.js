const {products} = require("../data.js");
const EventEmitter = require("events");
let emitter = new EventEmitter();


function emitChange() {
  emitter.emit("change");
}

let _cartItems = {};

module.exports = {

  // Reader methods
  getCartItems() {
    return _cartItems;
  },

  // Writer methods. These are the "actions".
  addCartItem(productId) {
    if(!_cartItems[productId]) {
      _cartItems[productId] = {
        id: productId,
        quantity: 1,
      };
    } else{
      _cartItems[productId][quantity] += 1;
    }
    emitChange();
  },

  removeCartItem(productId) {
      delete _cartItems[productId];
      emitChange();
  },

  updateCartItemQuantity(productId,quantity) {
    _cartItems[productId] = {
      id: productId,
      quantity: quantity,
    };
    emitChange();
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}
