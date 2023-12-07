// Initialize FirebaseUI Auth interface
let ui = new firebaseui.auth.AuthUI(firebase.auth());

// Configuration for the FirebaseUI widget
let uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // Callback for successful sign in
            let user = authResult.user;

            // Check if the user is new and add them to Firestore
            if (authResult.additionalUserInfo.isNewUser) {
                db.collection("users")
                    .doc(user.uid)
                    .set({
                        name: user.displayName,
                        email: user.email,
                        country: "Canada",
                        school: "BCIT",
                    })
                    .then(function () {
                        // Redirect to homepage after successful new user addition
                        window.location.assign("homepage.html");
                    })
                    .catch(function (error) {
                        // Handle error in adding new user
                        console.error("Error adding new user: " + error);
                    });
            } else {
                // Continue with redirect for existing users
                return true;
            }
            return false;
        },
        // Uncomment to hide loader when UI is shown
        // uiShown: function () {
        //     document.getElementById('loader').style.display = 'none';
        // }
    },
    signInFlow: "popup", // Use popup for sign-in instead of redirect
    signInSuccessUrl: "homepage.html", // URL to redirect to on successful sign-in
    signInOptions: [
        // Configuration for various sign-in options
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // List other providers as needed
    ],
    tosUrl: "<your-tos-url>", // URL to your Terms of Service
    privacyPolicyUrl: "<your-privacy-policy-url>", // URL to your Privacy Policy
};

// Start the FirebaseUI Auth widget
ui.start("#firebaseui_auth_container", uiConfig);
