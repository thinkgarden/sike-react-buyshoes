const React = require("react");
const MakeConnectedComponent = require("./components/MakeConnectedComponent");
const Products = require("./components/Products");
const CartStore = require("../stores/CartStore");
const LikedStore = require("../stores/LikedStore");


let ConnectedProducts = MakeConnectedComponent(
    MakeConnectedComponent(Products,CartStore,"cartItems"), LikedStore,"likedItems");
