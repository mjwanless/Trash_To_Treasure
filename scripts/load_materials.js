// Function to load material information from the specified Firestore collection
function load_material_information(collection) {
    // Retrieve selected category and subcategory from local storage
    const category = localStorage.getItem("user_selected_category");
    const subcategory = localStorage.getItem("user_selected_subcategory").replace(" ", "_");

    // Access the specified collection and document in Firestore
    db.collection(collection)
        .doc(category)
        .get()
        .then(doc => {
            data = doc.data();
            material_data = data[subcategory];

            // Display the type of material
            $(".insert_type").html(material_data["type"]);

            // Display the description of the material
            $(".material_description").html(material_data["description"]);

            // Format and display the material's name
            var material_name = material_data["name"];
            var no_underscores = material_name.replace("_", " ");
            $(".insert_name").html(no_underscores);

            // Display if the material is recyclable
            $(".insert_boolean").html(material_data["recyclable"]);

            // Construct an image tag with the URL from Firestore and display the image
            const imgUrl = material_data["img"]; 
            const imgTag = `<img src="${imgUrl}" alt="${material_data["name"]}">`;
            $(".insert_image").html(imgTag);
        });
}

// Retrieve the user-selected subcategory from local storage
const user_selected_category = localStorage.getItem("user_selected_category");
const user_selected_subcategory = localStorage.getItem("user_selected_subcategory");

// Function to load valid depot locations based on the selected material
function load_valid_depots() {
    let valid_locations_html = "";

    // Query the locations collection for depots that accept the selected material
    db.collection("locations")
        .where("materials", "array-contains", user_selected_subcategory)
        .get()
        .then((valid_locations) => {
            valid_locations.forEach((location) => {
                let depot_name = location.id;
                let depot_name_formatted = depot_name.replaceAll("_", " ");
                valid_locations_html += `<div class="depot_location">${depot_name_formatted}</div>`;
            });

            // Update the HTML with valid locations
            $(".locations").html(valid_locations_html);
        });
}

// Initialize the material information and depot loading functions
load_material_information("materials");
load_valid_depots();

// Event listener for click events within the document
document.addEventListener("click", function (e) {
    const user_selected_depot = e.target.closest(".depot_location");
    if (user_selected_depot) {
        // Store the selected depot and redirect to the depot display page
        store_user_selected_depot_clicked(user_selected_depot);
        redirect_user_to_depot_display();
    }
});

// Function to redirect user to the depot display page
function redirect_user_to_depot_display() {
    window.location.href = "./depot_display.html";
}

// Function to store the selected depot in local storage
function store_user_selected_depot_clicked(user_selected_depot) {
    let depot_name = user_selected_depot.innerHTML;
    localStorage.setItem("user_selected_depot", depot_name);
}
