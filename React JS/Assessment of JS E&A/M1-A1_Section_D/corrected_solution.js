const list = document.getElementById("foodList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

// Corrected LocalStorage fallback
let favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);

function saveFavorites() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}

function updateFavouriteUI(li, button, title) {

    const isFavourite = favorites.includes(title);

    li.classList.toggle(
        "favourite",
        isFavourite
    );

    button.textContent = isFavourite
        ? "★ Favourite"
        : "☆ Add to Favourites";

}

async function loadFoodItems() {

    loading.textContent = "Loading...";

    error.textContent = "";

    list.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );


        // Check HTTP response
        if (!response.ok) {

            throw new Error(
                `HTTP error: ${response.status}`
            );

        }


        const posts = await response.json();

        loading.textContent = "";


        posts.slice(0, 10).forEach(post => {

            const li = document.createElement("li");


            const title = document.createElement("span");

            title.textContent = post.title;

            const button = document.createElement("button");

            updateFavouriteUI(
                li,
                button,
                post.title
            );


            button.addEventListener("click", () => {

                const index =
                    favorites.indexOf(post.title);


                if (index !== -1) {

                    favorites.splice(index, 1);

                } else {

                    favorites.push(post.title);

                }

                saveFavorites();

                updateFavouriteUI(
                    li,
                    button,
                    post.title
                );

            });


            li.append(title, button);

            list.appendChild(li);

        });


    } catch (err) {

        loading.textContent = "";

        error.textContent =
            "Unable to load food items. Please try again.";

        console.error(err);

    }

}

loadFoodItems();