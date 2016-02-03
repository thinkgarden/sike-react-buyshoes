const EventEmitter = require("events");
const AppDispatcher = require("../AppDispatcher");
let emitter = new EventEmitter();

let _cartItems = {};

function emitChange() {
  emitter.emit("change");
}

// Writer methods. These are the "actions".
function addCartItem({productId}) {
  if(!_cartItems[productId]) {
    _cartItems[productId] = {
      id: productId,
      quantity: 1,
    };
  } else{
    _cartItems[productId][quantity] += 1;
  }
  emitChange();
}

function removeCartItem({productId}) {
  delete _cartItems[productId];
  emitChange();
}

function updateCartItemQuantity({productId,quantity}) {
  _cartItems[productId] = {
    id: productId,
    quantity: quantity,
  };
  emitChange();
}

AppDispatcher.register((action) =>{
  if(action.type === "addCartItem") {
    addCartItem(action);
  }
});

AppDispatcher.register((action) => {
  if(action.type === "removeCartItem") {
    removeCartItem(action);
  }
});

AppDispatcher.register(action => {
  if(action.type === "updateCartItemQuantity") {
    updateCartItemQuantity(action);
  }
});




module.exports = {

  // Reader methods
  cartItems() {
    return _cartItems;
  },

  addChangeListener(callback) {
    emitter.addListener("change",callback)
  },

  removeChangeListener(callback) {
    emitter.removeListener("change",callback)
  },
}
