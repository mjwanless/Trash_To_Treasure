// Retrieve the user-selected category from local storage.
const user_selected_category = localStorage.getItem("user_selected_category");

// Execute the function to load the appropriate script for the user-selected category.
function display_material_subcategories(collection, user_selected_category) {
    // Access the specified database collection.
    db.collection(collection)
        .doc(`${user_selected_category}`) // Access the document corresponding to the provided category.
        .get() // Retrieve the data from the document.
        .then((doc) => {
            category_data = doc.data(); // Store the retrieved data in a variable.

            // Extract the keys (subcategories) from the data and store them in an array.
            const fields = Object.keys(category_data);

            // Sort the array of subcategories alphabetically.
            let ordered_fields = fields.sort();
            console.log(ordered_fields); // Log the sorted subcategories for debugging.
            console.log(ordered_fields[0]);

            // Iterate over the sorted subcategories.
            for (i = 0; i <= ordered_fields.length; i++)
                // Update the HTML content of each button with the subcategory name.
                // Replace underscores in subcategory names with spaces for display.
                $(`.button${i}`).html(ordered_fields[i].replace("_", " "));
        })}

// dynamically load subcategories based on user-selected category
display_material_subcategories("materials", user_selected_category);
