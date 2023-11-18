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
})}


display_categories();

