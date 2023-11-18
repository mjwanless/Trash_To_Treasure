// Retrieve the user-selected subcategory from local storage.
const user_selected_subcategory = localStorage.getItem("user_selected_subcategory");

// Function to dynamically load a script based on the user-selected subcategory.
function dynamically_load_correct_script() {
    console.log(user_selected_subcategory);

    // Script for displaying metal subcategories
    // Check if the selected subcategory is 'stainless steel'.
    if (user_selected_subcategory == "aluminum") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_aluminum.js";
        document.body.appendChild(added_script);
    }

    // Similar checks and operations for other subcategories (2 to 8).
    if (user_selected_subcategory == "brass") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_brass.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "copper") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_copper.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "iron") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_iron.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "lead") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_lead.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "stainless steel") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_stainless_steel.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "steel") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/metal/display_steel.js";
        document.body.appendChild(added_script);
    }
    // Blank template display subcategory script
    if (user_selected_subcategory == "subcategory_8") {
        let added_script = document.createElement("script");
        added_script.src = ".js";
        document.body.appendChild(added_script);
    }

    // Script for displaying garbage subcategory
    if (user_selected_subcategory == "general garbage") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/garbage/display_general_garbage.js";
        document.body.appendChild(added_script);
    }

    // Scripts for displaying glass subcategories
    if (user_selected_subcategory == "glass") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/glass/display_glass.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "stained glass") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/glass/display_stained_glass.js";
        document.body.appendChild(added_script);
    }

    // Scripts for displaying hazardous subcategories
    if (user_selected_subcategory == "batteries") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/hazardous/display_batteries.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "oils") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/hazardous/display_oils.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "paints") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/hazardous/display_paints.js";
        document.body.appendChild(added_script);
    }

    // Scripts for displaying plastic subcategories
    if (user_selected_subcategory == "plastic") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/plastic/display_plastic.js";
        document.body.appendChild(added_script);
    }
    if (user_selected_subcategory == "soft plastic") {
        let added_script = document.createElement("script");
        added_script.src = "scripts/display_information_for_individual_materials/plastic/display_soft_plastic.js";
        document.body.appendChild(added_script);
    }
}

// Execute the function to load the appropriate script based on the user-selected subcategory.
dynamically_load_correct_script();
