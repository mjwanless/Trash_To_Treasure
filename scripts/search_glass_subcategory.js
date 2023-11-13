function display_material_subcategories(collection, category) {
    db.collection(collection)
        .doc(`${category}`)
        .get()
        .then(doc => {
            category_data = doc.data();
            const fields = Object.keys(category_data)
            var ordered_fields = fields.sort()
            console.log(ordered_fields)
            console.log(ordered_fields[0])
            for (i = 0; i <= ordered_fields.length; i++)
                $(`.button${i}`).html(ordered_fields[i].replace("_", " "))
        })
}

display_material_subcategories("materials", "glass")