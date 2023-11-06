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

            console.log(glass_data)

        //     anthonyhelp = doc.data().test;
        //     console.log(anthonyhelp["nest1"][0])
        })
}

function display_depot_locations(collection) {
    db.collection(collection)
        .doc("5oHNEmdKpdoAQmPM7ff1")
        .get()
        .then(doc => {
            depot_data = doc.data().placeholder;
            console.log(depot_data)
        })
}

display_recycling_information("materials");
display_depot_locations("locations")
