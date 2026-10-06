const menuItems = [
    {
        name: "Margherita Pizza",
        price: 199,
        category: "Pizza",
        isVegetarian: true
    },

    {
        name: "Veg Burger",
        price: 129,
        category: "Burger",
        isVegetarian: true
    },

    {
        name: "Chicken Biryani",
        price: 249,
        category: "Biryani",
        isVegetarian: false
    },

    {
        name: "Paneer Tikka",
        price: 179,
        category: "Starter",
        isVegetarian: true
    },

    {
        name: "Chicken Burger",
        price: 199,
        category: "Burger",
        isVegetarian: false
    },

    {
        name: "Masala Dosa",
        price: 99,
        category: "South Indian",
        isVegetarian: true
    }
];


const menuContainer = document.getElementById("menuContainer");

const cartContainer = document.getElementById("cartContainer");

const cartCount = document.getElementById("cartCount");

const totalPrice = document.getElementById("totalPrice");

const menuSection = document.getElementById("menuSection");

const cartSection = document.getElementById("cartSection");

const menuBtn = document.getElementById("menuBtn");

const cartBtn = document.getElementById("cartBtn");

const clearCartBtn = document.getElementById("clearCartBtn");

let cart = JSON.parse(localStorage.getItem("foodCart")) || [];


function displayMenu() {

    menuContainer.innerHTML = "";

    menuItems.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `
            <h3>${item.name}</h3>

            <p>Category: ${item.category}</p>

            <p>Price: ₹${item.price}</p>

            <p class="${item.isVegetarian ? "veg" : "non-veg"}">
                ${item.isVegetarian ? "🌱 Vegetarian" : "🍗 Non-Vegetarian"}
            </p>

            <button class="add-btn" onclick="addToCart(${index})">
                Add to Cart
            </button>
        `;

        menuContainer.appendChild(card);
    });
}

function addToCart(index) {

    const item = menuItems[index];


    const existingItem = cart.find(
        cartItem => cartItem.name === item.name
    );

    if (existingItem) {


        existingItem.quantity++;

    } else {
        cart.push({
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }

    saveCart();

    displayCart();
}

function saveCart() {

    localStorage.setItem(
        "foodCart",
        JSON.stringify(cart)
    );
}

function displayCart() {

    cartContainer.innerHTML = "";

    let total = 0;

    let itemCount = 0;


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }

    cart.forEach((item, index) => {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        itemCount += item.quantity;

        cartItem.innerHTML = `

            <div>

                <h3>${item.name}</h3>

                <p>
                    ₹${item.price} × ${item.quantity}
                </p>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

            <div class="quantity-buttons">

                <button onclick="decreaseQuantity(${index})">
                    -
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

            </div>

        `;

        cartContainer.appendChild(cartItem);

    });

    cartCount.textContent = itemCount;

    totalPrice.textContent = `Total: ₹${total}`;
}

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();
}

function decreaseQuantity(index) {

    cart[index].quantity--;

    if (cart[index].quantity === 0) {

        cart.splice(index, 1);

    }

    saveCart();

    displayCart();
}

clearCartBtn.addEventListener("click", function () {

    cart = [];

    localStorage.removeItem("foodCart");

    displayCart();

    alert("Cart cleared successfully!");

});

menuBtn.addEventListener("click", function () {

    menuSection.style.display = "block";

    cartSection.style.display = "none";

});

cartBtn.addEventListener("click", function () {

    menuSection.style.display = "none";

    cartSection.style.display = "block";

    displayCart();

});

async function loadRestaurants() {

    const loading = document.getElementById("loading");

    const error = document.getElementById("error");

    const restaurantSelect =
        document.getElementById("restaurantSelect");

    try {

        loading.style.display = "block";

        error.textContent = "";


        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {

            throw new Error("Failed to load restaurants");

        }
        const restaurants = await response.json();

        loading.style.display = "none";

        restaurants.forEach(function (restaurant) {

            const option = document.createElement("option");

            option.value = restaurant.id;

            option.textContent = restaurant.name;

            restaurantSelect.appendChild(option);

        });

    } catch (err) {

        loading.style.display = "none";

        error.textContent =
            "Unable to load restaurants. Please try again.";

        console.log(err);

    }
}

displayMenu()

displayCart();

loadRestaurants();