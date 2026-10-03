
function generateOrderId() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let orderId = "";

    for (let i = 0; i < 8; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        orderId += characters[randomIndex];
    }

    return orderId;
}

export { generateOrderId };


function formatPrice(price) {
    return "₹" + price.toFixed(2);
}

function getDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

// export {
//     formatPrice,
//     getDiscountedPrice
// };

export { formatPrice };
export default getDiscountedPrice;