// categories.js

function display_categories() {
    let firestore_materials_collection = firebase.firestore().collection("materials");
    firestore_materials_collection.get().then((materials) => {
        let materials_array = materials.docs.map((doc) => doc.id);
        console.log("materials_array: ", materials_array);

        const categoriesContainer = document.getElementById("categoriesContainer");
        categoriesContainer.innerHTML = "";

        materials_array.forEach((material, index) => {
            const button = document.createElement("button");
            const buttonText = document.createTextNode(material);
            button.appendChild(buttonText); // Append the text node to the button

            // Add the appropriate classes including a specific one for categories page
            button.className = `main_button category_button category_${index + 1}`;

            // Set the onclick event to store the category and redirect
            button.onclick = () => {
                store_category_and_redirect(button);
            };

            // Append the button to the container
            categoriesContainer.appendChild(button);
        });
    });
}

function store_category_and_redirect(category_button) {
    // Get the category name, which is the button's text content
    const category_name = category_button.textContent;
    localStorage.setItem("user_selected_category", category_name);
    window.location.href = "material_subcategories.html";
}

// Call the function to display categories
display_categories();
