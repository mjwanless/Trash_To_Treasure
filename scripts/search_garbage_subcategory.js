function display_material_subcategories(collection, category) {
    db.collection(collection)
        .doc(`${category}`)
        .get()
        .then(doc => {
            category_data = doc.data();
            const fields = Object.keys(category_data)
            console.log(fields)
            console.log(fields[0])
            for (i = 0; i <= fields.length; i++)
                $(`.button${i}`).html(fields[i].replace("_", " "))
        })
}

display_material_subcategories("materials", "garbage")