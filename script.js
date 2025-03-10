// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners and functionality here

    // Handle the "Create Playlist" button click
    const createPlaylistButton = document.querySelector(".inncard1 .button button");
    if (createPlaylistButton) {
        createPlaylistButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Create Playlist button clicked!");
            // Add logic to create a playlist
        });
    }

    // Handle the "Browse Podcasts" button click
    const browsePodcastsButton = document.querySelector(".inncard2 .button button");
    if (browsePodcastsButton) {
        browsePodcastsButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Browse Podcasts button clicked!");
            // Add logic to browse podcasts
        });
    }

    // Handle the search form submission
    const searchForm = document.querySelector(".search_form");
    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            const searchInput = document.querySelector(".search_input");
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // Add logic to handle search
            } else {
                alert("Please enter a search term.");
            }
        });
    }

    // Handle the "Login" button click
    const loginButton = document.querySelector(".log button");
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Login button clicked!");
            // Add logic to handle login
        });
    }

    // Handle the "Install" button click
    const installButton = document.querySelector(".install .inst");
    if (installButton) {
        installButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Install button clicked!");
            // Add logic to handle installation
        });
    }

    // Handle the "Sign Up" button click
    const signUpButton = document.querySelector(".install .signup");
    if (signUpButton) {
        signUpButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Sign Up button clicked!");
            // Add logic to handle sign-up
        });
    }

    // Handle the "Show All" links in the content sections
    const showAllLinks = document.querySelectorAll(".header div:last-child");
    showAllLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const sectionTitle = link.previousElementSibling.textContent;
            alert(`Show All clicked for: ${sectionTitle}`);
            // Add logic to show all items in the section
        });
    });

    // Handle the language button click
    const languageButton = document.querySelector(".buttonlay button");
    if (languageButton) {
        languageButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Language button clicked!");
            // Add logic to change language
        });
    }

    // Handle the "+" button in the library section
    const plusButton = document.querySelector(".library_inner .plus");
    if (plusButton) {
        plusButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            alert("Add to Library button clicked!");
            // Add logic to add to library
        });
    }

    // Handle clicks on artist/album/podcast cards
    const cards = document.querySelectorAll(".inncard1, .inncard2, .inncard3, .inncard4, .inncard5");
    cards.forEach((card) => {
        card.addEventListener("click", function (event) {
            const cardTitle = card.querySelector(".a_name").textContent;
            alert(`Clicked on: ${cardTitle}`);
            // Add logic to handle card clicks (e.g., play music or show details)
        });
    });

    // Handle clicks on legal and policy links
    const legalLinks = document.querySelectorAll(".name a");
    legalLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const linkText = link.textContent;
            alert(`Clicked on: ${linkText}`);
            // Add logic to handle legal/policy links
        });
    });
});