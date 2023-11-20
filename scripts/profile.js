function displayNameFromFirestore() {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user.uid); // Let's know who the logged-in user is by logging their UID
            currentUser = db.collection("users").doc(user.uid); // Go to the Firestore document of the user
            currentUser.get().then((userDoc) => {
                // Get the user name
                let userName = userDoc.data().name;
                console.log(userName);
                //$("#name-goes-here").text(userName); // jQuery
                document.getElementsByClassName("name_goes_here")[0].innerHTML = userName;
            });
        } else {
            console.log("No user is logged in."); // Log a message when no user is logged in
        }
    });
}
displayNameFromFirestore();

// from profile.js
let currentUser; //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get().then((userDoc) => {
                //get the data fields of the user
                let userName = userDoc.data().name;
                let userSchool = userDoc.data().school;
                let userCity = userDoc.data().city;
                let userEmail = userDoc.data().email;

                //if the data fields are not empty, then write them in to the form.
                if (userName != null) {
                    document.getElementById("nameInput").value = userName;
                }
                if (userSchool != null) {
                    document.getElementById("schoolInput").value = userSchool;
                }
                if (userCity != null) {
                    document.getElementById("cityInput").value = userCity;
                }
                if (userEmail != null) {
                    document.getElementById("emailInput").value = userEmail;
                }
            });
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });
}

//call the function to run it
populateUserInfo();
function editUserInfo() {
    //Enable the form fields

    document.getElementById("personalInfoFields").disabled = false;
}
function saveUserInfo() {
    //enter code here
    //a) get user entered values
    userName = document.getElementById("nameInput").value; //get the value of the field with id="nameInput"
    userSchool = document.getElementById("schoolInput").value; //get the value of the field with id="schoolInput"
    userCity = document.getElementById("cityInput").value; //get the value of the field with id="cityInput"
    userEmail = document.getElementById("emailInput").value; //get the value of the field with id="cityInput"

    //b) update user's document in Firestore
    currentUser
        .update({
            name: userName,
            school: userSchool,
            city: userCity,
            email: userEmail,
        })
        .then(() => {
            console.log("Document successfully updated!");
        });

    //c) disable edit
    document.getElementById("personalInfoFields").disabled = false;
}

/*
function populateReviews() {
    // console.log("test");
    let hikeCardTemplate = document.getElementById("reviewCardTemplate");
    let hikeCardGroup = document.getElementById("reviewCardGroup");

    let params = new URL(window.location.href); // Get the URL from the search bar
    let hikeID = params.searchParams.get("docID");

    // Double-check: is your collection called "Reviews" or "reviews"?
    db.collection("reviews")
        .where("hikeDocID", "==", hikeID)
        .get()
        .then((allReviews) => {
            reviews = allReviews.docs;
            console.log(reviews);
            reviews.forEach((doc) => {
                var title = doc.data().title;
                var level = doc.data().level;
                var season = doc.data().season;
                var description = doc.data().description;
                var flooded = doc.data().flooded;
                var scrambled = doc.data().scrambled;
                var time = doc.data().timestamp.toDate();
                var rating = doc.data().rating; // Get the rating value
                console.log(rating);

                console.log(time);

                let reviewCard = hikeCardTemplate.content.cloneNode(true);
                reviewCard.querySelector(".title").innerHTML = title;
                reviewCard.querySelector(".time").innerHTML = new Date(time).toLocaleString();
                reviewCard.querySelector(".level").innerHTML = `Level: ${level}`;
                reviewCard.querySelector(".season").innerHTML = `Season: ${season}`;
                reviewCard.querySelector(".scrambled").innerHTML = `Scrambled: ${scrambled}`;
                reviewCard.querySelector(".flooded").innerHTML = `Flooded: ${flooded}`;
                reviewCard.querySelector(".description").innerHTML = `Description: ${description}`;

                // Populate the star rating based on the rating value

                // Initialize an empty string to store the star rating HTML
                let starRating = "";
                // This loop runs from i=0 to i<rating, where 'rating' is a variable holding the rating value.
                for (let i = 0; i < rating; i++) {
                    starRating += '<span class="material-icons">star</span>';
                }
                // After the first loop, this second loop runs from i=rating to i<5.
                for (let i = rating; i < 5; i++) {
                    starRating += '<span class="material-icons">star_outline</span>';
                }
                reviewCard.querySelector(".star-rating").innerHTML = starRating;

                hikeCardGroup.appendChild(reviewCard);
            });
        });
}

populateReviews();




*/
