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

function get_material_names() {
    var firestore_materials_collection = firebase.firestore().collection("materials");

    firestore_materials_collection
        .get()
        .then((materials_collection) => {
            materials_collection.forEach((doc) => {
                var material_category = doc.id;
                console.log("material_category: ", material_category)
            })
        })
}

get_material_names();