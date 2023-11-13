// Retrieve the user-selected subcategory from local storage.
const user_selected_subcategory = localStorage.getItem("user_selected_subcategory")

// Function to dynamically load a script based on the user-selected subcategory.
function dynamically_load_correct_script() {
    console.log(user_selected_subcategory)

    // Check if the selected subcategory is 'stainless steel'.
    if (user_selected_subcategory == 'stainless steel') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_stainless_steel_information.js"
        document.body.appendChild(added_script)
    }

    // Similar checks and operations for other subcategories (2 to 8).
    if (user_selected_subcategory == 'subcategory_2') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_3') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_4') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_5') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_6') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_7') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'subcategory_8') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    
}

// Execute the function to load the appropriate script based on the user-selected subcategory.
dynamically_load_correct_script()
