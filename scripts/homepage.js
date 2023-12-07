// Define functions for redirecting the user to different pages
function redirect_user_to_search_page() {
    window.location.href = "material_categories.html";
}

function redirect_user_to_depot_locations_page() {
    window.location.href = "depot_locations.html";
}

function redirect_user_to_other_resources_page() {
    window.location.href = "other_resources.html";
}

function redirect_user_to_profile_page() {
    window.location.href = "profile.html";
}

// Add a single event listener for click events and handle redirection based on the clicked button
document.addEventListener("click", function (e) {
    if (e.target.closest(".search_button")) {
        redirect_user_to_search_page();
    } else if (e.target.closest(".depot_locations_button")) {
        redirect_user_to_depot_locations_page();
    } else if (e.target.closest(".other_resources_button")) {
        redirect_user_to_other_resources_page();
    } else if (e.target.closest(".profile_button")) {
        redirect_user_to_profile_page();
    }
});

// Function to display the username of the logged-in user
function display_username() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then((userDoc) => {
                let userName = userDoc.data().name;
                document.getElementsByClassName("name_goes_here")[0].innerHTML = userName;
            });
        }
    });
}

// Test function to log the user ID for debugging
function test_console_log_user_id() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User ID can be used here as needed
        }
    });
}

display_username();  // Call the function to display the username
test_console_log_user_id();  // Call the test function
