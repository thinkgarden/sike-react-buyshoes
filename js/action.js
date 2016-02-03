const AppDispatcher = require("./AppDispatcher");

function addCartItem(productId) {
  AppDispatcher.dispatcher({type: "addCartItem", productId: productId});
}

function removeCartItem(productId) {
  AppDispatcher.dispatcher({type: "removeCartItem", productId: productId});
}

function updateCartItemQuantity(productId, quantity) {
  AppDispatcher.dispatcher({type: "updateCartItemQuantity", productId: productId, quantity: quantity});
}
module.exports = {
  addCartItem, removeCartItem, updateCartItemQuantity
}


