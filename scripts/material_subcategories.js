function redirect_user_to_display_material_information() {
    window.location.href = "display_material_information.html";
}

function store_subcategory(subcategory_button) {
    subcategory_name = subcategory_button.innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory_name);
}

document.addEventListener("click", function (e) {
    const subcategory_button = e.target.closest("#individual_buttons");
    if (subcategory_button) {
        console.log("working!");
        store_subcategory(subcategory_button);
        redirect_user_to_display_material_information();
    }
});
