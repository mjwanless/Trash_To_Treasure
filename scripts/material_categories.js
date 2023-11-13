// Function to redirect the user to the subcategories page.
function redirect_user_to_subcategories() {
    window.location.href = 'material_subcategories.html'
}

// Functions to store the selected category in local storage.
// Each function corresponds to a different category.

// Store 'category_1' in local storage.
function store_category_1_in_local_storage() {
    var category = 'category_1';
    localStorage.setItem('user_selected_category', category)
}

// Store 'category_2' in local storage.
function store_category_2_in_local_storage() {
    var category = 'category_2';
    localStorage.setItem('user_selected_category', category)
}

// Store 'category_3' in local storage.
function store_category_3_in_local_storage() {
    var category = 'category_3';
    localStorage.setItem('user_selected_category', category)
}

// Store 'category_4' in local storage.
function store_category_4_in_local_storage() {
    var category = 'category_4';
    localStorage.setItem('user_selected_category', category)
}

// Store 'category_5' in local storage.
function store_category_5_in_local_storage() {
    var category = 'category_5';
    localStorage.setItem('user_selected_category', category)
}

// Store 'category_6' in local storage.
function store_category_6_in_local_storage() {
    var category = 'category_6';
    localStorage.setItem('user_selected_category', category)
}

// Event listeners for each category button. When a category button is clicked,
// the corresponding category is stored in local storage, and the user is redirected.

// Listener for clicks on 'category_1' button.
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".category_1");
    if (category_button) {
        console.log("working!");
        store_category_1_in_local_storage();
        redirect_user_to_subcategories()
    }
})

// Similar event listeners are set up for 'category_2' to 'category_6' buttons.
// Each listener checks if the clicked element is a button for the respective category,
// then calls the appropriate function to store the category and redirects the user.

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
