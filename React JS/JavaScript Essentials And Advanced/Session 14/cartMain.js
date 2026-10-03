import {
    addToCart,
    removeFromCart,
    calculateTotal
} from "./cartUtils.js";

const cart = [];

const shoes = {
    name: "Shoes",
    price: 1999,
    quantity: 1
};

const tShirt = {
    name: "T-Shirt",
    price: 999,
    quantity: 2
};

addToCart(cart, shoes);
addToCart(cart, tShirt);

console.log("Cart Total: ₹" + calculateTotal(cart));

removeFromCart(cart, "Shoes");

console.log("Cart Total After Removal: ₹" + calculateTotal(cart));
