const user_selected_category = localStorage.getItem("user_selected_category")

function dynamically_load_correct_script() {
    console.log(user_selected_category)
    if (user_selected_category == 'category_1') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_garbage_subcategory.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_category == 'category_2') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_glass_subcategory.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_category == 'category_3') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_hazardous_subcategory.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_category == 'category_4') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_metal_subcategory.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_category == 'category_5') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_plastic_subcategory.js"
        document.body.appendChild(added_script)
    }
}

dynamically_load_correct_script()
