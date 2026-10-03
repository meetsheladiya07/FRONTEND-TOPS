// import {
//     formatPrice,
//     getDiscountedPrice
// } from "./utils.js";

import getDiscountedPrice from "./utils.js"; 

import { formatPrice } from "./utils.js";

const items = [
    {
        name: "Shoes",
        price: 1999,
        discount: 10
    },
    {
        name: "T-Shirt",
        price: 999,
        discount: 20
    },
    {
        name: "Headphones",
        price: 2499,
        discount: 15
    }
];

items.forEach(item => {
    const discountedPrice = getDiscountedPrice(
        item.price,
        item.discount
    );

    console.log("Item:", item.name);
    console.log("Original Price:", formatPrice(item.price));
    console.log("Discount:", item.discount + "%");
    console.log("Discounted Price:", formatPrice(discountedPrice));
    console.log("--------------------");
});
