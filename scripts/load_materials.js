// Retrieve the user-selected subcategory from local storage.
const user_selected_subcategory = localStorage.getItem("user_selected_subcategory")

// Function to dynamically load a script based on the user-selected subcategory.
function dynamically_load_correct_script() {
    console.log(user_selected_subcategory)


    // Script for displaying metal subcategories
    // Check if the selected subcategory is 'stainless steel'.
    if (user_selected_subcategory == 'aluminum') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_aluminum.js"
        document.body.appendChild(added_script)
    }

    // Similar checks and operations for other subcategories (2 to 8).
    if (user_selected_subcategory == 'brass') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_brass.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'copper') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_copper.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'iron') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_iron.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'lead') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_lead.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'stainless steel') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_stainless_steel.js"
        document.body.appendChild(added_script)
    }
    if (user_selected_subcategory == 'steel') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_steel.js"
        document.body.appendChild(added_script)
    }
    // Blank template display subcategory script
    if (user_selected_subcategory == 'subcategory_8') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }

    //script for displaying general garbage subcategory
    if (user_selected_subcategory == 'general garbage') {
        var added_script = document.createElement('script')
        added_script.src = ".js"
        document.body.appendChild(added_script)
    }
    
}

// Execute the function to load the appropriate script based on the user-selected subcategory.
dynamically_load_correct_script()
