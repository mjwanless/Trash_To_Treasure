// Add an event listener to the entire document to listen for click events
document.addEventListener("click", function (e) {
    // Identify if the clicked element or its parent is a 'depot location button'
    const depot_location_button = e.target.closest(".depot_location_button");

    // If a depot location button was clicked
    if (depot_location_button) {
        store_location(depot_location_button);  // Call function to store location
    }
});

// Function to store the depot location in local storage
function store_location(depot_location_button) {
    // Get the name of the depot from the button's innerHTML
    let depot_name = depot_location_button.innerHTML;

    // Store the depot name in local storage with the key 'user_selected_depot'
    localStorage.setItem("user_selected_depot", depot_name);
}
