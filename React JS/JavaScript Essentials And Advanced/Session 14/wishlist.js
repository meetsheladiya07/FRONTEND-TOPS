import {
    addToWishlist,
    removeFromWishlist,
    listWishlist
} from "./wishlistUtils.js";

const wishlist = [];

const shoes = {
    name: "Nike Shoes",
    price: 2999
};

const watch = {
    name: "Smart Watch",
    price: 1999
};

const headphones = {
    name: "Wireless Headphones",
    price: 2499
};

addToWishlist(wishlist, shoes);
addToWishlist(wishlist, watch);
addToWishlist(wishlist, headphones);

listWishlist(wishlist);

removeFromWishlist(wishlist, "Smart Watch");

console.log("\nAfter Removing:");
listWishlist(wishlist);
