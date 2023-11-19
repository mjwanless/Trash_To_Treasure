document.addEventListener("click", function (e) {
    const depot_location_button = e.target.closest(".depot_location_button");
    if (depot_location_button) {
        console.log("working!");
        store_location(depot_location_button);
    }
});

function store_location(depot_location_button) {
    let depot_name = depot_location_button.innerHTML;
    localStorage.setItem("user_selected_depot", depot_name);
}