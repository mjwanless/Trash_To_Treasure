// Function to display recycling information about a specific material.
function display_recycling_information(collection) {
    // Accessing the database collection specified by the argument.
    db.collection(collection)
        .doc("hazardous")
        .get()
        .then((doc) => {
            material_data = doc.data().oils;

            // Logging and displaying the type of material.
            console.log(material_data["type"]);
            $(".insert_type").html(material_data["type"]);

            // Logging and displaying the description of the material.
            console.log(material_data["description"]);
            $(".material_description").html(material_data["description"]);

            // Logging and formatting the material's name to replace underscores with spaces.
            console.log(material_data["name"]);
            let material_name = material_data["name"];
            let no_underscores = material_name.replace("_", " ");
            $(".insert_name").html(no_underscores);

            // Logging and displaying if the material is recyclable.
            console.log(material_data["recyclable"]);
            $(".insert_boolean").html(material_data["recyclable"]);

            // Constructing an image tag and displaying the image related to the material.
            completedImgTag = `<img src="${material_data["img_alt"]}" alt="">`;
            $(".insert_image").html(material_data);
        });
}

// Functions to display the location of various recycling depots.
function display_depot_location1(collection) {
    db.collection(collection)
        .doc("go_green_bottle_depot_and_recycling") // Accessing specific depot document.
        .get()
        .then((doc) => {
            depot_data = doc.data().address; // Retrieving the address.
            console.log(depot_data);
            $(".location_1").html(depot_data); // Displaying the address in the specified element.
        });
}

function display_depot_location2(collection) {
    // Similar to display_depot_location1, but for a different depot.
    db.collection(collection)
        .doc("north_shore_recycling_and_waste_centre")
        .get()
        .then((doc) => {
            depot_data = doc.data().address;
            console.log(depot_data);
            $(".location_2").html(depot_data);
        });
}

function display_depot_location3(collection) {
    // Similar to display_depot_location1 and display_depot_location2, but for another depot.
    db.collection(collection)
        .doc("capital_salvage")
        .get()
        .then((doc) => {
            depot_data = doc.data().address;
            console.log(depot_data);
            $(".location_3").html(depot_data);
        });
}

// Calling the functions to display the recycling information and depot locations.
display_recycling_information("materials");
display_depot_location1("locations");
display_depot_location2("locations");
display_depot_location3("locations");
