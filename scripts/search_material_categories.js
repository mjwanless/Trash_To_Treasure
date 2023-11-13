function redirect_user_to_subcategories() {
    window.location.href = 'search_material_subcategories.html'
}

function store_category_1_in_local_storage() {
    var category = 'category_1';
    localStorage.setItem('user_selected_category', category)
}
function store_category_2_in_local_storage() {
    var category = 'category_2';
    localStorage.setItem('user_selected_category', category)
}
function store_category_3_in_local_storage() {
    var category = 'category_3';
    localStorage.setItem('user_selected_category', category)
}
function store_category_4_in_local_storage() {
    var category = 'category_4';
    localStorage.setItem('user_selected_category', category)
}
function store_category_5_in_local_storage() {
    var category = 'category_5';
    localStorage.setItem('user_selected_category', category)
}
function store_category_6_in_local_storage() {
    var category = 'category_6';
    localStorage.setItem('user_selected_category', category)
}


document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_1");
    if (category_button) {
        console.log("working!");
        store_category_1_in_local_storage();
        redirect_user_to_subcategories()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_2");
    if (category_button) {
        console.log("working!");
        store_category_2_in_local_storage();
        redirect_user_to_subcategories()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_3");
    if (category_button) {
        console.log("working!");
        store_category_3_in_local_storage();
        redirect_user_to_subcategories()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_4");
    if (category_button) {
        console.log("working!");
        store_category_4_in_local_storage();
        redirect_user_to_subcategories()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_5");
    if (category_button) {
        console.log("working!");
        store_category_5_in_local_storage();
        redirect_user_to_subcategories()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_6");
    if (category_button) {
        console.log("working!");
        store_category_6_in_local_storage();
        redirect_user_to_subcategories()
    }
})
