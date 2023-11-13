// Function to display material subcategories for a given category in a database collection.
function display_material_subcategories(collection, category) {
    // Accessing the specified collection in the database.
    db.collection(collection)
        .doc(`${category}`) // Targeting the document that matches the specified category.
        .get() // Retrieving the data from the document.
        .then(doc => {
            category_data = doc.data(); // Storing the retrieved data in a variable.

            // Extracting the keys (which are the subcategories) from the data.
            const fields = Object.keys(category_data)

            // Sorting the subcategories in alphabetical order.
            var ordered_fields = fields.sort()
            console.log(ordered_fields) // Logging the sorted subcategories for debugging.
            console.log(ordered_fields[0])

            // Iterating over the sorted subcategories.
            for (i = 0; i <= ordered_fields.length; i++)
                // Updating the HTML of each button to display the subcategory names.
                // Replaces underscores in the subcategory names with spaces for readability.
                $(`.button${i}`).html(ordered_fields[i].replace("_", " "))
        })
}

// Calling the function to display subcategories of 'glass' from the 'materials' collection.
display_material_subcategories("materials", "glass")