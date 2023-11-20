document.addEventListener("DOMContentLoaded", function () {
    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.addEventListener('click', toggleFavorite);

    // Initialize favorites check if user is logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            checkFavoriteStatus();
        }
    });
});

function checkFavoriteStatus() {
    let currentUser = firebase.auth().currentUser;
    if (!currentUser) return; // Exit if no user is logged in

    let currentLocation = localStorage.getItem("user_selected_depot");
    firebase.firestore().collection('users').doc(currentUser.uid)
        .get().then(doc => {
            let favorites = doc.data().favorites || [];
            updateFavoriteButton(favorites.includes(currentLocation));
        });
}

function toggleFavorite() {
    let currentUser = firebase.auth().currentUser;
    if (!currentUser) return; // Exit if no user is logged in

    let currentLocation = localStorage.getItem("user_selected_depot");
    const userRef = firebase.firestore().collection('users').doc(currentUser.uid);

    userRef.get().then(doc => {
        let favorites = doc.data().favorites || [];
        if (favorites.includes(currentLocation)) {
            favorites = favorites.filter(item => item !== currentLocation);
        } else {
            favorites.push(currentLocation);
        }
        userRef.update({ favorites });
        updateFavoriteButton(favorites.includes(currentLocation));
    });
}

function updateFavoriteButton(isFavorited) {
    const favoriteButton = document.getElementById('favoriteButton');
    if (isFavorited) {
        favoriteButton.innerHTML = '<span class="material-icons">star</span> Favorited';
    } else {
        favoriteButton.innerHTML = '<span class="material-icons">star_border</span> Favorite';
    }
}

function load_depot_information(collection) {
    let user_selected_depot = localStorage.getItem("user_selected_depot")
    console.log(user_selected_depot)
    let trim_user_selected_depot = user_selected_depot.trim()
    console.log(trim_user_selected_depot)
    let remove_br_element = trim_user_selected_depot.replace("<br>", " ")
    console.log(remove_br_element)
    let depot_display_name = remove_br_element
    let to_lower_case = remove_br_element.toLocaleLowerCase()
    console.log(to_lower_case)
    let formatted_depot_name = to_lower_case.replaceAll(" ", "_")
    console.log(formatted_depot_name)
    db.collection(collection, formatted_depot_name)
        .doc(formatted_depot_name)
        .get()
        .then(doc => {
            data = doc.data()
            console.log(data)
            let depot_image = "tbd"
            let depot_phone = data["phone_number"]
            let depot_address = data["address"]
            let depot_website = "tbd"
            let depot_hours = data["hours"]
            let depot_notes = "tbd"
            $('.insert_name').html(depot_display_name)
            $('.insert_image').html(depot_image)
            $('.insert_phone').html(depot_phone)
            $('.insert_address').html(depot_address)
            $('.insert_website').html(depot_website)
            $('.monday').html(depot_hours["monday"])
            $('.tuesday').html(depot_hours["tuesday"])
            $('.wednesday').html(depot_hours["wednesday"])
            $('.thursday').html(depot_hours["thursday"])
            $('.friday').html(depot_hours["friday"])
            $('.saturday').html(depot_hours["saturday"])
            $('.sunday').html(depot_hours["sunday"])
            $('.insert_notes').html(depot_notes)
});
        }

load_depot_information("locations")