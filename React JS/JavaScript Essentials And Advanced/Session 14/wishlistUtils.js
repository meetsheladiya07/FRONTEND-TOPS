function addToWishlist(wishlist, item) {
    wishlist.push(item);
    console.log(item.name + " added to wishlist.");
}

function removeFromWishlist(wishlist, itemName) {
    const index = wishlist.findIndex(item => item.name === itemName);

    if (index !== -1) {
        wishlist.splice(index, 1);
        console.log(itemName + " removed from wishlist.");
    } else {
        console.log(itemName + " not found in wishlist.");
    }
}

function listWishlist(wishlist) {
    console.log("Wishlist Items:");

    wishlist.forEach((item, index) => {
        console.log(
            (index + 1) + ". " + item.name + " - ₹" + item.price
        );
    });
}

export {
    addToWishlist,
    removeFromWishlist,
    listWishlist
};
