// Get playlists from LocalStorage

let myPlaylists = JSON.parse(
    localStorage.getItem("myPlaylists")
) || [];


let editingIndex = -1;


// Q1 & Q2
// addPlaylistLink()

function addPlaylistLink(linkObj) {

    myPlaylists.push(linkObj);

    savePlaylists();

    displayPlaylists();
}



// Q3
// Playlist with name and URL


function addNewPlaylist() {

    let name = document.getElementById("playlistName").value;
    let url = document.getElementById("playlistUrl").value;

    let linkObj = {
        name: name,
        url: url
    };

    addPlaylistLink(linkObj);
}


// Q4 & Q5
// validateURL()


function validateURL(url) {

    return (
        url.startsWith("https://") &&
        url.includes(".")
    );
}



// Q6
// editPlaylistLink()


function editPlaylistLink(index, newLinkObj) {

    myPlaylists = JSON.parse(
        localStorage.getItem("myPlaylists")
    ) || [];

    myPlaylists[index] = newLinkObj;

    savePlaylists();

    displayPlaylists();
}



// Q7, Q8 & Q12
// toggleTheme()


function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");
    }
}

function applySavedTheme() {

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");
    }
}


// Q9
// deletePlaylistLink()

function deletePlaylistLink(index) {

    myPlaylists.splice(index, 1);

    savePlaylists();

    displayPlaylists();
}


// Q10 & Q11
// manageLink()

function manageLink(linkObj, mode) {

    if (mode === "add") {

        myPlaylists.push(linkObj);

    } else if (mode === "edit") {

        myPlaylists[linkObj.index] = {
            name: linkObj.name,
            url: linkObj.url
        };
    }

    savePlaylists();

    displayPlaylists();
}


function savePlaylists() {

    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(myPlaylists)
    );
}


// Q13 & Q14
// Instagram URL validation

function validateInstagram() {

    let input = document.getElementById("instagram");

    let error = document.getElementById(
        "instagramError"
    );

    let url = input.value.trim();

    if (
        url.startsWith(
            "https://www.instagram.com/"
        )
    ) {

        error.textContent = "Valid Instagram URL";

        error.style.color = "green";

    } else {

        error.textContent =
            "Invalid Instagram profile URL";

        error.style.color = "red";
    }
}


// Q15
// Spotify / YouTube validation

function validateLink(url) {

    return (
        url.startsWith("https://") &&
        (
            url.includes("spotify.com") ||
            url.includes("youtube.com")
        )
    );
}

function validatePlaylistURL() {

    let url = document.getElementById(
        "playlistUrl"
    ).value.trim();

    let error = document.getElementById(
        "urlError"
    );

    if (validateLink(url)) {

        error.textContent = "";

        return true;

    } else {

        error.textContent =
            "Invalid URL. Use a Spotify or YouTube URL.";

        return false;
    }
}

        function displayPlaylists() {

            let list = document.getElementById(
                "playlistList"
            );

            list.innerHTML = "";

            if (myPlaylists.length === 0) {

                list.innerHTML =
                    "<p>No playlists added yet.</p>";

                return;
            }


            myPlaylists.forEach(function (playlist, index) {

                let card = document.createElement("div");

                card.className = "playlist-card";


                card.innerHTML = `
                    <h3>${playlist.name}</h3>

                    <a
                        href="${playlist.url}"
                        target="_blank"
                    >
                        ${playlist.url}
                    </a>

                    <br>

                    <button
                        class="edit-btn"
                        onclick="startEdit(${index})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deletePlaylistLink(${index})"
                    >
                        Delete
                    </button>
                `;


                list.appendChild(card);
            });
        }


        function startEdit(index) {

            let playlist = myPlaylists[index];

            document.getElementById(
                "playlistName"
            ).value = playlist.name;

            document.getElementById(
                "playlistUrl"
            ).value = playlist.url;


            editingIndex = index;


            document.getElementById(
                "submitBtn"
            ).textContent = "Update Playlist";


            document.getElementById(
                "cancelBtn"
            ).style.display = "inline-block";
        }



        function cancelEdit() {

            editingIndex = -1;

            document.getElementById(
                "playlistForm"
            ).reset();


            document.getElementById(
                "submitBtn"
            ).textContent = "Add Playlist";


            document.getElementById(
                "cancelBtn"
            ).style.display = "none";


            document.getElementById(
                "urlError"
            ).textContent = "";
        }



        document.getElementById(
            "playlistForm"
        ).addEventListener("submit", function (event) {

            event.preventDefault();


            let name = document.getElementById(
                "playlistName"
            ).value.trim();


            let url = document.getElementById(
                "playlistUrl"
            ).value.trim();


            let error = document.getElementById(
                "urlError"
            );

            if (name === "" || url === "") {

                error.textContent =
                    "Please enter playlist name and URL.";

                return;
            }

            if (!validateLink(url)) {

                error.textContent =
                    "Invalid URL. Use a Spotify or YouTube URL.";

                return;
            }


            error.textContent = "";

            if (editingIndex === -1) {

                manageLink(
                    {
                        name: name,
                        url: url
                    },
                    "add"
                );

            }

            else {

                manageLink(
                    {
                        index: editingIndex,
                        name: name,
                        url: url
                    },
                    "edit"
                );


                editingIndex = -1;

                document.getElementById(
                    "submitBtn"
                ).textContent = "Add Playlist";

                document.getElementById(
                    "cancelBtn"
                ).style.display = "none";
            }


            document.getElementById(
                "playlistForm"
            ).reset();

        });     

        window.onload = function () {

            applySavedTheme();

            displayPlaylists();
        };