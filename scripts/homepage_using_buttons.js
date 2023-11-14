function redirect_user_to_profile_page() {
    window.location.href = 'profile.html'
}

document.addEventListener("click", function(e) {
    const profile_clicked  = e.target.closest(".profile_button");
    if (profile_clicked) {
        redirect_user_to_profile_page()
    }
})