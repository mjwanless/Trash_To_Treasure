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
        favoriteButton.innerHTML = '<span class="material-symbols-outlined">star</span> Favorited';
    } else {
        favoriteButton.innerHTML = '<span class="material-symbols-outlined">star_border</span> Favorite';
    }
}
