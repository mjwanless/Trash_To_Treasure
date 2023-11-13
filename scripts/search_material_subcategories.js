function redirect_user_to_display_material_information() {
    window.location.href = 'display_material_information.html'
}

function store_subcategory_1_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_2_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_3_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_4_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_5_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_6_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_7_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}
function store_subcategory_8_in_local_storage() {
    var subcategory = document.getElementsByClassName("button0")[0].innerHTML;
    localStorage.setItem('user_selected_subcategory', subcategory)
}


document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button0");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_1_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button1");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_2_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button2");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_3_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button3");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_4_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button4");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_5_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button5");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_6_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button6");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_7_in_local_storage()
    }
})
document.addEventListener("click", function (e) {
    const category_button = e.target.closest(".button7");
    if (category_button) {
        console.log("working!");
        redirect_user_to_display_material_information()
        store_subcategory_8_in_local_storage()
    }
})
