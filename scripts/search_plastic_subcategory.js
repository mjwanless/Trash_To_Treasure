// Function to display material subcategories for a given category from a database collection.
function display_material_subcategories(collection, category) {
    // Access the specified collection in the database.
    db.collection(collection)
        .doc(`${category}`) // Access the document that corresponds to the specified category.
        .get() // Retrieve the data from the document.
        .then(doc => {
            category_data = doc.data(); // Store the retrieved data in a variable.

            // Extract the keys from the data object, which represent the subcategories.
            const fields = Object.keys(category_data)

            // Sort the subcategories alphabetically.
            var ordered_fields = fields.sort()
            console.log(ordered_fields) // Log the sorted subcategories for debugging.
            console.log(ordered_fields[0])

            // Iterate over the sorted subcategories.
            for (i = 0; i <= ordered_fields.length; i++)
                // Update the HTML content of each button element to display each subcategory name.
                // Underscores in subcategory names are replaced with spaces for better readability.
                $(`.button${i}`).html(ordered_fields[i].replace("_", " "))
        })
}

// Execute the function to display subcategories of 'plastic' materials.
display_material_subcategories("materials", "plastic")