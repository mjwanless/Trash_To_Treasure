function display_recycling_information(collection) {
    db.collection(collection)
        .doc("glass")
        .get()
        .then(doc => {
            glass_data = doc.data().glass;
            
            console.log(glass_data["type"])
            $("#type-textbox").html(glass_data["type"])

            console.log(glass_data["description"])
            $(".details-field").html(glass_data["description"])

            console.log(glass_data["name"])
            $("#name-textbox").html(glass_data["name"])

            console.log(glass_data["recyclable"])
            $("#recyclable-textbox").html(glass_data["recyclable"])

            completedImgTag = `<img src="${glass_data["img_alt"]}" alt="">`
            $("#materials-display-image").html(completedImgTag)
        })
}

function display_depot_locations(collection) {
    db.collection(collection)
        .doc("depot_locations")
        .get()
        .then(doc => {
            depot_data = doc.data().go_green_bottle_depot_and_recycling["address"];
            console.log(depot_data)
            $("#location1").html(depot_data)
            
            depot_data = doc.data().north_shore_recycling_and_waste_centre["address"];
            console.log(depot_data)
            $("#location2").html(depot_data)
            
            depot_data = doc.data().una_green_depot["address"];
            console.log(depot_data)
            $("#location3").html(depot_data)
        })
}

display_recycling_information("materials");
display_depot_locations("locations")