const user_selected_subcategory = localStorage.getItem("user_selected_subcategory")

function dynamically_load_correct_script() {
    console.log(user_selected_subcategory)
    if (user_selected_subcategory == 'stainless steel') {
        var added_script = document.createElement('script')
        added_script.src = "scripts/display_stainless_steel_information.js"
        document.body.appendChild(added_script)
    }
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

dynamically_load_correct_script()
