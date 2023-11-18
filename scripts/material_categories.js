function display_categories() {
    var firestore_materials_collection = firebase.firestore().collection("materials");
    firestore_materials_collection
        .get()
        .then((materials) => {
            var materials_array = materials.docs.map(doc => doc.id);
            console.log("materials_array: ", materials_array)
            document.getElementsByClassName('category_1')[0].innerHTML = materials_array[0];
            document.getElementsByClassName('category_2')[0].innerHTML = materials_array[1];
            document.getElementsByClassName('category_3')[0].innerHTML = materials_array[2];
            document.getElementsByClassName('category_4')[0].innerHTML = materials_array[3];
            document.getElementsByClassName('category_5')[0].innerHTML = materials_array[4];
        })
}

display_categories();

function redirect_user_to_subcategories() {
    window.location.href = 'material_subcategories.html'
}

document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".main_button");
    if (category_button) {
        console.log("working!");
        redirect_user_to_subcategories()
        store_category(category_button)
    }
})

function store_category(category_button) {
    category_name = category_button.innerHTML
    localStorage.setItem("user_selected_category", category_name)
}

