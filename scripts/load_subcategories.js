// Retrieve the user-selected category from local storage.
const user_selected_category = localStorage.getItem("user_selected_category")

// Function to dynamically load a specific script based on the selected category.
function dynamically_load_correct_script() {
    console.log(user_selected_category)

    // Check if the selected category is 'category_1'.
    if (user_selected_category == 'category_1') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/search_garbage_subcategory.js"
        document.body.appendChild(added_script)
    }

    // Similar if conditions for other categories ('category_2' to 'category_5').
    // Each condition creates a script element, sets its source to the respective script file,
    // and appends it to the document body.

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

// Execute the function to load the appropriate script for the user-selected category.
dynamically_load_correct_script()
