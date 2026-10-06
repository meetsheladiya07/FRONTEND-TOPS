const list = document.getElementById("foodList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let favorites = JSON.parse(localStorage.getItem("favorites") || []);

async function loadFoodItems() {
    loading.textContent = "Loading...";
    error.textContent = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        loading.textContent = "";

        posts.slice(0, 10).forEach(post => {
            const li = document.createElement("li");

            const title = document.createElement("span");
            title.textContent = post.title;

            const button = document.createElement("button");

            button.textContent = favorites.includes(post.title)
                ? "★ Favourite"
                : "☆ Add to Favourites";

            if (favorites.includes(post.title)) {
                li.classList.add("favourite");
            }

            button.addEventListener("click", () => {

                if (favorites.includes(post.title)) {

                    favorites = favorites.filter(
                        item => item !== post.title
                    );

                } else {

                    favorites.push(post.title);

                }

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );

                li.classList.toggle(
                    "favourite",
                    favorites.includes(post.title)
                );

                button.textContent = favorites.includes(post.title)
                    ? "★ Favourite"
                    : "☆ Add to Favourites";
            });

            li.append(title, button);

            list.appendChild(li);
        });

    } catch (err) {

        loading.textContent = "";

        error.textContent =
            "Failed to load food items.";

        console.error(err);
    }
}

loadFoodItems();