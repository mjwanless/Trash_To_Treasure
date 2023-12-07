// subcategories.js

// Function to display material subcategories for a selected category
function display_material_subcategories(collection) {
    // Retrieve the user-selected category from local storage
    const user_selected_category = localStorage.getItem("user_selected_category");

    // Format the category name for display (replace underscores with spaces)
    let formatted = user_selected_category.replaceAll("_", " ");

    // Update the page title with the selected category
    $("#page_title").html(`Subcategories of ${formatted}`);

    // Access the Firestore collection and retrieve the document for the selected category
    db.collection(collection)
        .doc(user_selected_category)
        .get()
        .then((doc) => {
            const category_data = doc.data();

            // Handle case where no data is found for the selected category
            if (!category_data) {
                console.error('No data found for category:', user_selected_category);
                return;
            }

            // Extract and sort the keys (subcategories) from the category data
            const fields = Object.keys(category_data).sort();

            // Get the HTML container for displaying the subcategories
            const subcategoriesContainer = document.getElementById("subcategoriesContainer");
            subcategoriesContainer.innerHTML = "";

            // Create and display buttons for each subcategory
            fields.forEach((field, index) => {
                const button = document.createElement("button");
                button.innerHTML = field.replace(/_/g, " "); // Format subcategory name for display
                // Add classes for styling
                button.className = `main_button subcategory_button button${index}`;
                // Set an onclick event to store the subcategory and redirect the user
                button.onclick = () => {
                    store_subcategory_and_redirect(button);
                };
                // Append the button to the container
                subcategoriesContainer.appendChild(button);
            });
        });
}

// Function to store the selected subcategory and redirect the user
function store_subcategory_and_redirect(subcategory_button) {
    // Get the subcategory name from the button's text content
    const subcategory_name = subcategory_button.innerText;

    // Store the selected subcategory name in local storage
    localStorage.setItem("user_selected_subcategory", subcategory_name);

    // Redirect the user to the page for displaying material information
    window.location.href = "display_material_information.html";
}

// Call the function to display subcategories for the selected category
display_material_subcategories("materials");
