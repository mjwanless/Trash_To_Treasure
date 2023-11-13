// Function to display subcategories of a given material category from a database
function display_material_subcategories(collection, category) {
    // Accessing the specified collection and document in the database
    db.collection(collection)
        .doc(`${category}`)
        .get()
        .then(doc => {
            // Extracting the data from the document
            category_data = doc.data();

            // Retrieving all the keys (field names) from the data
            const fields = Object.keys(category_data)

             // Sorting the field names alphabetically
            var ordered_fields = fields.sort()
            console.log(ordered_fields)
            console.log(ordered_fields[0])

            // Iterating through the ordered fields to display each subcategory
            for (i = 0; i <= ordered_fields.length; i++)
                // Updating the HTML of elements with class `buttonX` where X is the index
                // Also, replacing underscores with spaces for better readability
                $(`.button${i}`).html(ordered_fields[i].replace("_", " "))
        })
}

// Example usage of the function
display_material_subcategories("materials", "metal")