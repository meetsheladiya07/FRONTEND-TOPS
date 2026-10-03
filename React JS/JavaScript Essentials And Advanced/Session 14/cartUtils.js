function addToCart(cart, product) {
    cart.push(product);
    console.log(product.name + " added to cart.");
}

function removeFromCart(cart, productName) {
    const index = cart.findIndex(product => product.name === productName);

    if (index !== -1) {
        cart.splice(index, 1);
        console.log(productName + " removed from cart.");
    } else {
        console.log(productName + " not found in cart.");
    }
}

function calculateTotal(cart) {
    let total = 0;

    cart.forEach(product => {
        total += product.price * product.quantity;
    });

    return total;
}

export {
    addToCart,
    removeFromCart,
    calculateTotal
};
