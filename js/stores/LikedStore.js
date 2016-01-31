const {products} = require("../data");
const EventEmitter = require("events");
let emitter = new EventEmitter();

function emitChange () {
  emitter.emit("change");
}

let _likedItems = {};

module.exports = {
  likedItems: function () {
    return _likedItems;
  },
  addLikedItem: function (productId) {
    if(!_likedItems[productId]) {
      _likedItems[productId] = products[productId];
      emitChange();
    }
  },
  removeLikedItem: function (productId) {
    if(_likedItems[productId]){
      delete _likedItems[productId];
      emitChange();
    }
  },
  addChangeListener: function (callback) {
    emitter.addListener("change", callback);
  },
  removeChangeListener: function (callback) {
    emitter.removeListener("change", callback);
  }
}
