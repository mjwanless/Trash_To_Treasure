// subcategories.js

function display_material_subcategories(collection) {
    const user_selected_category = localStorage.getItem("user_selected_category");
    console.log("Selected Category:", user_selected_category);

    db.collection(collection)
        .doc(user_selected_category)
        .get()
        .then((doc) => {
            const category_data = doc.data();
            console.log("Category data:", category_data);

            if (!category_data) {
                console.error('No data found for category:', user_selected_category);
                return;
            }

            const fields = Object.keys(category_data).sort();

            const subcategoriesContainer = document.getElementById("subcategoriesContainer");
            subcategoriesContainer.innerHTML = "";

            fields.forEach((field, index) => {
                const button = document.createElement("button");
                button.innerHTML = field.replace(/_/g, " ");
                // Add main_button and subcategory_button classes for styling
                button.className = `main_button subcategory_button button${index}`;
                button.onclick = () => {
                    store_subcategory_and_redirect(button);
                };
                subcategoriesContainer.appendChild(button);
            });
        });
}

function store_subcategory_and_redirect(subcategory_button) {
    const subcategory_name = subcategory_button.innerText;
    localStorage.setItem("user_selected_subcategory", subcategory_name);
    window.location.href = "display_material_information.html";
}

// Assuming you have a user-selected category in local storage
display_material_subcategories("materials");
