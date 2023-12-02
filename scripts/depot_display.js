document.addEventListener("DOMContentLoaded", function () {
    const favoriteButton = document.getElementById('favoriteButton');
    favoriteButton.addEventListener('click', toggleFavorite);

    // Initialize favorites check if user is logged in
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            checkFavoriteStatus();
        }
    });

     // Load reviews when the page is loaded
    loadReviews();
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

// Submit a review
function submitReview() {
    let currentUser = firebase.auth().currentUser;
    if (!currentUser) {
        alert('You must be logged in to submit a review');
        return;
    }

    // Retrieve and format the depot name to use as the document ID
    let depotName = localStorage.getItem("user_selected_depot");
    let formattedDepotName = formatDepotName(depotName);

    let review = {
        name: currentUser.displayName || 'Anonymous',
        rating: getSelectedRating(),
        text: document.getElementById('review_text').value,
        timestamp: new Date()
    };

    // Reference to the specific depot document in the depot_reviews collection
    const depotReviewRef = firebase.firestore().collection('depot_reviews').doc(formattedDepotName);

    // Use a transaction to add the new review to the array of reviews
    firebase.firestore().runTransaction(transaction => {
        return transaction.get(depotReviewRef).then(doc => {
            if (!doc.exists) {
                transaction.set(depotReviewRef, { reviews: [review] });
            } else {
                let existingReviews = doc.data().reviews || [];
                transaction.update(depotReviewRef, { reviews: [...existingReviews, review] });
            }
        });
    }).then(() => {
        alert('Review submitted successfully');
        loadReviews(); // Reload the reviews to display the new one
    }).catch(error => {
        console.error('Error writing review: ', error);
    });
}

// Helper function to format the depot name to use as document ID
function formatDepotName(depotName) {
    return depotName.trim().toLowerCase().replaceAll(" ", "_").replaceAll("<br>", "_");
}


// Load reviews from Firestore
function loadReviews() {
    // Retrieve and format the depot name to use as the document ID
    let depotName = localStorage.getItem("user_selected_depot");
    let formattedDepotName = formatDepotName(depotName);

    // Reference to the specific depot document in the depot_reviews collection
    const depotReviewRef = firebase.firestore().collection('depot_reviews').doc(formattedDepotName);

    depotReviewRef.get().then(doc => {
        let reviewsHtml = '';
        if (doc.exists && doc.data().reviews) {
            doc.data().reviews.forEach(review => {
                reviewsHtml += `<div class="review">
                                    <h4>${review.name}</h4>
                                    <div class="stars">${getStarsHtml(review.rating)}</div>
                                    <p>${review.text}</p>
                                </div>`;
            });
        } else {
            reviewsHtml = '<p>No reviews available.</p>';
        }
        document.getElementById('reviews_container').innerHTML = reviewsHtml;
    }).catch(error => {
        console.error('Error loading reviews: ', error);
        document.getElementById('reviews_container').innerHTML = '<p>Error loading reviews.</p>';
    });
}


// Generate HTML for stars based on rating
function getStarsHtml(rating) {
    let html = '';
    for (let i = 0; i < 5; i++) {
        html += `<span class="material-icons star ${i < rating ? 'selected' : ''}">star</span>`;
    }
    return html;
}

// Set rating based on star click
function setRating(rating) {
    const stars = document.querySelectorAll('#star_rating .star');
    stars.forEach((star, index) => {
        star.textContent = index < rating ? 'star' : 'star_border';
    });
}

// Get the selected rating from the stars
function getSelectedRating() {
    const stars = document.querySelectorAll('#star_rating .star');
    let rating = 0;
    stars.forEach((star, index) => {
        if (star.textContent === 'star') {
            rating = index + 1;
        }
    });
    return rating;
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
            let depot_accepted_materials = data.materials
            let depot_hours = data["hours"]
            $('.insert_name').html(depot_display_name)
            $('.insert_image').html(depot_image)
            $('.insert_phone').html(depot_phone)
            $('.insert_address').html(depot_address)
            let materials_html = "Accepted Materials: <br>"
            depot_accepted_materials.forEach((material) => {
                let formatted_material_name = material.replace("_", " ")
                materials_html += `${formatted_material_name} <br>`
            })
            $(".insert_accepted_materials").html(materials_html)
            $('.monday').html(depot_hours["monday"])
            $('.tuesday').html(depot_hours["tuesday"])
            $('.wednesday').html(depot_hours["wednesday"])
            $('.thursday').html(depot_hours["thursday"])
            $('.friday').html(depot_hours["friday"])
            $('.saturday').html(depot_hours["saturday"])
            $('.sunday').html(depot_hours["sunday"])
});
}

load_depot_information("locations")