function display_recycling_information(collection) {
    db.collection(collection)
        .doc("plastic")
        .get()
        .then((doc) => {
            plastic_data = doc.data().plastic;
            console.log(plastic_data["type"]);
            $("#type-textbox").html(plastic_data["type"]);

            console.log(plastic_data["description"]);
            $(".details-field").html(plastic_data["description"]);

            console.log(plastic_data["name"]);
            $("#name-textbox").html(plastic_data["name"]);

            console.log(plastic_data["recyclable"]);
            $("#recyclable-textbox").html(plastic_data["recyclable"]);

            console.log(plastic_data);

            //     anthonyhelp = doc.data().test;
            //     console.log(anthonyhelp["nest1"][0])
        });
}

function display_depot_locations(collection) {
    db.collection(collection)
        .doc("depot_locations")
        .get()
        .then((doc) => {
            depot1_data = doc.data().capital_salvage;
            depot2_data = doc.data().go_green_bottle_depot_and_recycling;
            depot3_data = doc.data().north_shore_recycling_and_waste_centre;
            $("");
            console.log(depot1_data);
            console.log(depot2_data);
            console.log(depot3_data);
        });
}

display_recycling_information("materials");
display_depot_locations("locations");
