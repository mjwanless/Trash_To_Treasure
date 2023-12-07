// Function to display categories from the Firestore database
function display_categories() {
    // Access the 'materials' collection in Firestore
    let firestore_materials_collection = firebase.firestore().collection("materials");

    // Retrieve all documents from the 'materials' collection
    firestore_materials_collection.get().then((materials) => {
        
        // Map the documents to an array of their IDs (category names)
        let materials_array = materials.docs.map((doc) => doc.id);

        // Access the HTML container for displaying the categories
        const categoriesContainer = document.getElementById("categoriesContainer");
        categoriesContainer.innerHTML = ""; // Clear any existing content

        // Iterate over each material/category
        materials_array.forEach((material, index) => {
            // Create a button element for each category
            const button = document.createElement("button");
            const buttonText = document.createTextNode(material); // Create text for the button
            button.appendChild(buttonText); // Append the text node to the button

            // Add classes to the button for styling and identification
            button.className = `main_button category_button category_${index + 1}`;

            // Set an onclick event to store the selected category and redirect the user
            button.onclick = () => {
                store_category_and_redirect(button);
            };

            // Append the button to the categories container in the HTML
            categoriesContainer.appendChild(button);
        });
    });
}

// Function to store the selected category and redirect the user
function store_category_and_redirect(category_button) {
    // Retrieve the category name from the button's text content
    const category_name = category_button.textContent;

    // Store the selected category name in local storage
    localStorage.setItem("user_selected_category", category_name);

    // Redirect the user to the material subcategories page
    window.location.href = "material_subcategories.html";
}

// Execute the function to display categories on the page
display_categories();
