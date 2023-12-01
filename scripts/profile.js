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
// let currentUser; //points to the document of the user who is logged in
function populateUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
        // Check if user is signed in:
        if (user) {
            //go to the correct user document by referencing to the user uid
            let currentUser = db.collection("users").doc(user.uid);
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
    document.getElementById("personalInfoFields").disabled = true;
    setTimeout(() => {
        location.reload();
    }, 500);
}

// function display_favourite_depots() {
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             db.collection("users")
//                 .doc(user.uid)
//                 .get()
//                 .then((doc) => {
//                     let userData = doc.data().favorites;

//                     for (i = 0; i < userData.length; i++) {
//                         $(`.favourite_${i}`).html(userData[i]);
//                     }
//                 });
//         }
//     });
// }

function load_favourite_depots() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            db.collection("users")
                .doc(user.uid)
                .get()
                .then((doc) => {
                    let userData = doc.data().favorites;
                    console.log(userData);
                    let favourite_locations_html = "";
                    for (let i = 0; i < userData.length; i++) {
                        let depot_name_formatted = userData[i];
                        console.log(depot_name_formatted);
                        favourite_locations_html += `<div class="favourite_display">${depot_name_formatted}</div>`;
                    }
                    $("#profile_favourite_depots").html(favourite_locations_html);
                });
        }
    });
}

load_favourite_depots();

// display_favourite_depots();

document.addEventListener("click", function (e) {
    console.log("clicked");
    const user_favorited_depot = e.target.closest(".favourite_display");
    if (user_favorited_depot) {
        console.log("pressed favourited depot display");
        store_user_favourited_depot_clicked(user_favorited_depot);
        redirect_user_to_depot_display();
    }
});

function redirect_user_to_depot_display() {
    window.location.href = "./depot_display.html";
}

function store_user_favourited_depot_clicked(user_favorited_depot) {
    let depot_name = user_favorited_depot.innerHTML;
    localStorage.setItem("user_selected_depot", depot_name);
}

function logout() {
    firebase
        .auth()
        .signOut()
        .then(function () {
            // Sign-out successful.
            window.location.assign("login.html");
        })
        .catch(function (error) {
            // An error happened.
            console.error("Error during logout: ", error);
        });
}
