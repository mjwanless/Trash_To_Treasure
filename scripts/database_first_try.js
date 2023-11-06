function display_recycling_information_from_database(collection) {
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
// function display_recycling_information_from_database(collection) {
//     db.collection(collection)
//         .doc("5oHNEmdKpdoAQmPM7ff1")
//         .get()
//         .then(doc => {
//             location1 = doc.data().Capital
//         })

// }

display_recycling_information_from_database("materials");
// display_recycling_information_from_database("locations");

// function displayHikeInfo() {
//     let params = new URL(window.location.href); //get URL of search bar
//     let ID = params.searchParams.get("docID"); //get value for key "id"
//     console.log(ID);

//     // doublecheck: is your collection called "Reviews" or "reviews"?
//     db.collection("hikes")
//         .doc(ID)
//         .get()
//         .then(doc => {
//             thisHike = doc.data();
//             hikeCode = thisHike.code;
//             hikeName = doc.data().name;

//             // only populate title, and image
//             document.getElementById("hikeName").innerHTML = hikeName;
//             let imgEvent = document.querySelector(".hike-img");
//             imgEvent.src = "../images/" + hikeCode + ".jpg";
//         });
// }
// displayHikeInfo();