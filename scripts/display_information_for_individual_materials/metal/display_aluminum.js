function display_recycling_information(collection) {
    db.collection(collection)
        .doc("metal")
        .get()
        .then(doc => {
            material_data = doc.data().aluminum;
            
            console.log(material_data["type"])
            $(".insert_type").html(material_data["type"])

            console.log(material_data["description"])
            $(".material_description").html(material_data["description"])

            console.log(material_data["name"])
            var material_name = material_data["name"]
            var no_underscores = material_name.replace("_", " ")
            $("insert_name").html(no_underscores)

            console.log(material_data["recyclable"])
            $(".insert_boolean").html(material_data["recyclable"])

            completedImgTag = `<img src="${material_data["img_alt"]}" alt="">`
            $(".insert_image").html(completedImgTag)
        })
}

function display_depot_location1(collection) {
    db.collection(collection)
        .doc("go_green_bottle_depot_and_recycling")
        .get()
        .then(doc => {
            depot_data = doc.data().address;
            console.log(depot_data)
            $(".location_1").html(depot_data)
        })
}

function display_depot_location2(collection) {
    db.collection(collection)
        .doc("north_shore_recycling_and_waste_centre")
        .get()
        .then(doc => {
            depot_data = doc.data().address;
            console.log(depot_data)
            $(".location_2").html(depot_data)
        })
}

function display_depot_location3(collection) {
    db.collection(collection)
        .doc("capital_salvage")
        .get()
        .then(doc => {
            depot_data = doc.data().address;
            console.log(depot_data)
            $(".location_3").html(depot_data)
        })
}


display_recycling_information("materials");
display_depot_location1("locations");
display_depot_location2("locations");
display_depot_location3("locations")