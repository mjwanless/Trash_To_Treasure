// Function to display the name of the logged-in user from Firestore
function displayNameFromFirestore() {
    // Check if the user is logged in
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Access the Firestore document of the logged-in user
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then((userDoc) => {
                // Retrieve and display the user's name
                let userName = userDoc.data().name;
                document.getElementsByClassName("name_goes_here")[0].innerHTML = userName;
            });
        }
    });
}
displayNameFromFirestore();

// Function to populate user information on the profile page
function populateUserInfo() {
    // Check if a user is signed in
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Access the Firestore document of the logged-in user
            let currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then((userDoc) => {
                // Retrieve user data from Firestore
                let userName = userDoc.data().name;
                let userSchool = userDoc.data().school;
                let userCity = userDoc.data().city;
                let userEmail = userDoc.data().email;

                // Populate form fields with user data
                if (userName != null) document.getElementById("nameInput").value = userName;
                if (userSchool != null) document.getElementById("schoolInput").value = userSchool;
                if (userCity != null) document.getElementById("cityInput").value = userCity;
                if (userEmail != null) document.getElementById("emailInput").value = userEmail;
            });
        }
    });
}
populateUserInfo();

// Function to enable editing of user information
function editUserInfo() {
    // Enable the form fields for editing
    document.getElementById("personalInfoFields").disabled = false;
}

// Function to save edited user information
function saveUserInfo() {
    // Retrieve user-entered values from form fields
    userName = document.getElementById("nameInput").value;
    userSchool = document.getElementById("schoolInput").value;
    userCity = document.getElementById("cityInput").value;
    userEmail = document.getElementById("emailInput").value;

    // Update user's document in Firestore with new data
    currentUser.update({
        name: userName,
        school: userSchool,
        city: userCity,
        email: userEmail,
    }).then(() => {
        // Re-disable editing and reload the page to reflect changes
        document.getElementById("personalInfoFields").disabled = true;
        setTimeout(() => {
            location.reload();
        }, 500);
    });
}

// Function to load and display user's favorite depots
function load_favourite_depots() {
    // Check if the user is logged in
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // Access the user's favorites from Firestore
            db.collection("users").doc(user.uid).get().then((doc) => {
                let userData = doc.data().favorites;
                let favourite_locations_html = "";
                for (let i = 0; i < userData.length; i++) {
                    let depot_name_formatted = userData[i];
                    favourite_locations_html += `<div class="favourite_display">${depot_name_formatted}</div>`;
                }
                // Update the HTML with favorite locations
                $("#profile_favourite_depots").html(favourite_locations_html);
            });
        }
    });
}
load_favourite_depots();

// Event listener for click events in the document
document.addEventListener("click", function (e) {
    const user_favorited_depot = e.target.closest(".favourite_display");
    if (user_favorited_depot) {
        // Store the clicked favorite depot and redirect
        store_user_favourited_depot_clicked(user_favorited_depot);
        redirect_user_to_depot_display();
    }
});

// Function to redirect user to the depot display page
function redirect_user_to_depot_display() {
    window.location.href = "./depot_display.html";
}

// Function to store clicked favorite depot in local storage
function store_user_favourited_depot_clicked(user_favorited_depot) {
    let depot_name = user_favorited_depot.innerHTML;
    localStorage.setItem("user_selected_depot", depot_name);
}

// Function to handle user logout
function logout() {
    firebase.auth().signOut().then(function () {
        // Redirect to login page after successful logout
        window.location.assign("login.html");
    }).catch(function (error) {
        // Handle errors during logout
        console.error("Error during logout: ", error);
    });
}
