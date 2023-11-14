function redirect_user_to_search_page() {
    window.location.href = 'material_categories.html'
}
function redirect_user_to_depot_locations_page() {
    window.location.href = 'depot_location.html'
}
function redirect_user_to_other_resources_page() {
    //tbd
}
function redirect_user_to_profile_page() {
    window.location.href = 'profile.html'
}


document.addEventListener("click", function(e) {
    const profile_clicked  = e.target.closest(".search_button");
    if (profile_clicked) {
        redirect_user_to_search_page()
    }
})
document.addEventListener("click", function(e) {
    const profile_clicked  = e.target.closest(".depot_locations_button");
    if (profile_clicked) {
        redirect_user_to_depot_locations_page()
    }
})
document.addEventListener("click", function(e) {
    const profile_clicked  = e.target.closest(".other_resources_button");
    if (profile_clicked) {
        redirect_user_to_other_resources_page()
    }
})
document.addEventListener("click", function(e) {
    const profile_clicked  = e.target.closest(".profile_button");
    if (profile_clicked) {
        redirect_user_to_profile_page()
    }
})


function displayNameFromFirestore() {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // Let's know who the logged-in user is by logging their UID
            currentUser = db.collection("users").doc(user.uid); // Go to the Firestore document of the user
            currentUser.get().then(userDoc => {
                // Get the user name
                var userName = userDoc.data().name;
                console.log(userName);
                //$("#name-goes-here").text(userName); // jQuery
                document.getElementsByClassName("name_goes_here")[0].innerHTML = userName;
            })
        } else {
            console.log("No user is logged in."); // Log a message when no user is logged in
        }
    })
}

displayNameFromFirestore();