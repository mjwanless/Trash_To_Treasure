//---------------------------------------------------
// This function loads the parts of your skeleton
// (navbar, footer, and other things) into html doc.
//---------------------------------------------------
function loadSkeleton() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //if the pointer to "user" object is not null, then someone is logged in
            // User is signed in.
            // Do something for the user here.
            $("#navbar_placeholder").load("./text/nav_after_login.html");
            $("#footer_placeholder").load("./text/footer.html");
        } else {
            // No user is signed in.
            $("#navbar_placeholder").load("./text/nav_before_login.html");
            $("#footer_placeholder").load("./text/footer.html");
        }
    });
}
loadSkeleton(); //invoke the function

// Changes the window location to the homepage and redirects the user
function home_button_redirect() {
    window.location.href = "./homepage.html";
}

// Sends the user back one page in the browser history when the back button is clicked
document.addEventListener("click", function (e) {
    const back_button_clicked = e.target.closest("#back_button");
    if (back_button_clicked) {
        window.history.back();
    }
});

// Redirects the user to the homepage when the home button is clicked
document.addEventListener("click", function (e) {
    const home_clicked = e.target.closest("#home_button");
    if (home_clicked) {
        home_button_redirect();
    }
});
