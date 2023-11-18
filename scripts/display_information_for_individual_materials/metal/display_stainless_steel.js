// Function to display recycling information about a specific material.
function display_recycling_information(collection) {
    // Access the database collection provided as a parameter.
    db.collection(collection)
        .doc("metal") // Target the specific document named 'metal'.
        .get() // Retrieve the data from the document.
        .then((doc) => {
            // Store the stainless steel data from the document in a variable.
            material_data = doc.data().stainless_steel;

            // Log and display the type of the material in a designated textbox.
            console.log(material_data["type"]);
            $(".insert_type").html(material_data["type"]);

            // Log and display the description of the material in a details field.
            console.log(material_data["description"]);
            $(".material_description").html(material_data["description"]);

            // Log, format, and display the name of the material (replacing underscores with spaces).
            console.log(material_data["name"]);
            let material_name = material_data["name"];
            let no_underscores = material_name.replace("_", " ");
            $(".insert_name").html(no_underscores);

            // Log and display whether the material is recyclable.
            console.log(material_data["recyclable"]);
            $(".insert_boolean").html(material_data["recyclable"]);
            // Create an image tag and display an image associated with the material.
            completedImgTag = `<img src="${material_data["img_alt"]}" alt="">`;
            $(".insert_image").html(material_data);
        });
}

// Functions to display the location of various recycling depots.
function display_depot_location1(collection) {
    // Access the database collection and retrieve the specified depot's address.
    db.collection(collection)
        .doc("go_green_bottle_depot_and_recycling") // Specify depot document.
        .get()
        .then((doc) => {
            depot_data = doc.data().address; // Retrieve and store the address.
            console.log(depot_data);
            $(".location_1").html(depot_data); // Display the address in the specified HTML element.
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
    // Similar to the previous functions, targeting another depot.
    db.collection(collection)
        .doc("capital_salvage")
        .get()
        .then((doc) => {
            depot_data = doc.data().address;
            console.log(depot_data);
            $(".location_3").html(depot_data);
        });
}

// Execute the functions to display recycling information and depot locations.
display_recycling_information("materials");
display_depot_location1("locations");
display_depot_location2("locations");
display_depot_location3("locations");
