function display_recycling_information(collection) {
    db.collection(collection)
        .doc("metal")
        .get()
        .then(doc => {
            metal_data = doc.data().copper;
            console.log(metal_data["type"])
            $("#type-textbox").html(metal_data["type"])

            console.log(metal_data["description"])
            $(".details-field").html(metal_data["description"])

            console.log(metal_data["name"])
            $("#name-textbox").html(metal_data["name"])

            console.log(metal_data["recyclable"])
            $("#recyclable-textbox").html(metal_data["recyclable"])


        })
}




function display_depot_locations(collection) {
    db.collection(collection)
        .doc("depot_locations")
        .get()
        .then((doc) => {
            depot1_data = doc.data().capital_salvage;
            depot2_data = doc.data().go_green_bottle_depot_and_recycling;
            depot3_data = doc.data().north_shore_recycling_and_waste_centre;
            $("#details-field-where-1").html(depot1_data["address"]);
            $("#details-field-where-2").html(depot2_data["address"]);
            $("#details-field-where-3").html(depot3_data["address"]);
        });
}

display_recycling_information("materials");
display_depot_locations("locations");