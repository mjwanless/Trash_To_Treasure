//I want to dynamically load our main categories from the database
function redirect_user_to_search_page() {
    window.location.href = 'material_categories.html'
}

document.addEventListener("click", function (e) {
    const profile_clicked = e.target.closest(".search_button");
    if (profile_clicked) {
        redirect_user_to_search_page()
    }
})