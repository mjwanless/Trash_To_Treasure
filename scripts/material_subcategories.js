// Function to redirect the user to the page displaying material information.
function redirect_user_to_display_material_information() {
    window.location.href = "display_material_information.html";
}

// Functions to store the selected subcategory in local storage.
// Each function corresponds to a different subcategory.

// Store the first subcategory in local storage.
function store_subcategory_1_in_local_storage() {
    let subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}

// Store the second subcategory in local storage.
function store_subcategory_2_in_local_storage() {
    let subcategory = document.getElementsByClassName("button1")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}

// Similar functions for other subcategories (3 to 8).
// Each function retrieves the text from the respective button and stores it in local storage.
function store_subcategory_3_in_local_storage() {
    let subcategory = document.getElementsByClassName("button2")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}
function store_subcategory_4_in_local_storage() {
    let subcategory = document.getElementsByClassName("button3")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}
function store_subcategory_5_in_local_storage() {
    let subcategory = document.getElementsByClassName("button4")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}
function store_subcategory_6_in_local_storage() {
    let subcategory = document.getElementsByClassName("button5")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}
function store_subcategory_7_in_local_storage() {
    let subcategory = document.getElementsByClassName("button6")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}
function store_subcategory_8_in_local_storage() {
    let subcategory = document.getElementsByClassName("button7")[0].innerHTML;
    localStorage.setItem("user_selected_subcategory", subcategory);
}

// Event listeners for each subcategory button.
// When a subcategory button is clicked, the corresponding subcategory is stored,
// and the user is redirected to the material information page.

// Listener for clicks on the first subcategory button.
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button0");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_1_in_local_storage();
    }
});

// Similar event listeners are set up for subcategory buttons 2 to 8.
// Each listener checks if the clicked element is a button for the respective subcategory,
// then calls the appropriate function to store the subcategory and redirects the user.
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button1");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_2_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button2");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_3_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button3");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_4_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button4");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_5_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button5");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_6_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button6");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_7_in_local_storage();
    }
});
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button7");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information();
        store_subcategory_8_in_local_storage();
    }
});
