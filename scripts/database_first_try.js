function display_recycling_information_from_database(collection) {
    db.collection(collection)
        .doc("glass2.0")
        .get()
        .then(doc => {
            type = doc.data().type;
            console.log(type)
            $("#type-textbox").html(type)

            a_name = doc.data().material_name
            console.log(a_name)
            $("#name-textbox").html(a_name)
            
            recyclable = doc.data().recyclable;
            console.log(recyclable);
            $(".recyclable-checkbox").html(recyclable)

            material_description = doc.data().description;
            console.log(material_description);
            $(".details-field").html(material_description);
        })
}
display_recycling_information_from_database("materials");

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