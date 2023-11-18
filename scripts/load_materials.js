// Retrieve the user-selected subcategory from local storage.
const user_selected_category = localStorage.getItem("user_selected_category")
const user_selected_subcategory = localStorage.getItem("user_selected_subcategory")

function load_material_information(collection) {
    // Accessing the database collection specified by the argument.
    const category = window.localStorage.getItem("user_selected_category")
    const subcategory = window.localStorage.getItem("user_selected_subcategory").replace(" ", "_")
    db.collection(collection)
        .doc(category)
        .get()
        .then(doc => {
            console.log(subcategory)
            data = doc.data()
            material_data = data[subcategory]
            console.log(data)

            // Logging and displaying the type of material.
            console.log(material_data["type"])
            $(".insert_type").html(material_data["type"])

            // Logging and displaying the description of the material.
            console.log(material_data["description"])
            $(".material_description").html(material_data["description"])

            // Logging and formatting the material's name to replace underscores with spaces.
            console.log(material_data["name"])
            var material_name = material_data["name"]
            var no_underscores = material_name.replace("_", " ")
            $(".insert_name").html(no_underscores)

            // Logging and displaying if the material is recyclable.
            console.log(material_data["recyclable"])
            $(".insert_boolean").html(material_data["recyclable"])

            // Constructing an image tag and displaying the image related to the material.
            completedImgTag = `<img src="${material_data["img_alt"]}" alt="">`
            $(".insert_image").html(material_data)
        })
}

load_material_information("materials", user_selected_category, user_selected_subcategory)

// function test(subcategory) {
//     var subcategory = subcategory.replace(" ", "_");
//     console.log(subcategory);
// }

// test(user_selected_subcategory)