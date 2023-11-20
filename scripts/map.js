function showMap() {
    //-----------------------------------------
    // Define and initialize basic mapbox data
    //-----------------------------------------
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWNoZW4zIiwiYSI6ImNsMGZyNWRtZzB2angzanBjcHVkNTQ2YncifQ.fTdfEXaQ70WoIFLZ2QaRmQ';
    const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Styling URL
        center: [-123.10288748791648, 49.27310594745156], // Starting position
        zoom: 8 // Starting zoom
    });

    // Add user controls to map
    map.addControl(new mapboxgl.NavigationControl());

    //------------------------------------
    // Listen for when map finishes loading
    // then Add map features 
    //------------------------------------
    map.on('load', () => {

        // Defines map pin icon for events
        map.loadImage(
            'https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-16-28668.png',
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage('eventpin', image); // Pin Icon

                // get user selected location
                let user_selected_depot = localStorage.getItem("user_selected_depot")
                console.log(user_selected_depot)
                let trim_user_selected_depot = user_selected_depot.trim()
                console.log(trim_user_selected_depot)
                let remove_br_element = trim_user_selected_depot.replace("<br>", " ")
                console.log(remove_br_element)
                let to_lower_case = remove_br_element.toLocaleLowerCase()
                console.log(to_lower_case)
                let formatted_depot_name = to_lower_case.replaceAll(" ", "_")
                console.log(formatted_depot_name)
                // READING information from "locations" collection in Firestore
                db.collection('locations').doc(formatted_depot_name).get().then(selected_depot => {
                    let depot_data = selected_depot.data()
                    console.log(depot_data)
                    console.log("got user depot")
                    const features = [];
                    lat = selected_depot.data().lat;
                    lng = selected_depot.data().lng;
                    console.log(lat, lng);
                    let coordinates = [lng, lat];
                    console.log(coordinates);
                    features.push({
                        'geometry': {
                            'type': 'Point',
                            'coordinates': coordinates
                        }
                    });

                    // Adds features as a source of data for the map
                    map.addSource('places', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': features
                        }
                    });

                    // Creates a layer above the map displaying the pins
                    // by using the sources that was just added
                    map.addLayer({
                        'id': 'places',
                        'type': 'symbol',
                        // source: 'places',
                        'source': 'places',
                        'layout': {
                            'icon-image': 'eventpin', // Pin Icon
                            'icon-size': 0.1, // Pin Size
                            'icon-allow-overlap': true // Allows icons to overlap
                        }
                    });

                    //-----------------------------------------------------------------------
                    // Add Click event listener, and handler function that creates a popup
                    // that displays info from location collection documents in Firestore
                    //-----------------------------------------------------------------------
                    map.on('click', 'places', (e) => {
                        // get depot description
                        let description = depot_data["description"];
                        // set description and location of popup when a location is clicked
                        new mapboxgl.Popup()
                            .setLngLat(coordinates)
                            .setHTML(description)
                            .addTo(map);
                    });
                });
            }
        );

        // Add the image to the map style.
        map.loadImage(
            'https://cdn-icons-png.flaticon.com/512/61/61168.png',
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style with width and height values
                map.addImage('userpin', image, { width: 10, height: 10 });

                // Adds user's current location as a source to the map
                navigator.geolocation.getCurrentPosition(position => {
                    const userLocation = [position.coords.longitude, position.coords.latitude];
                    console.log(userLocation);
                    if (userLocation) {
                        map.addSource('userLocation', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [{
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': userLocation
                                    },
                                    'properties': {
                                        'description': 'Your location'
                                    }
                                }]
                            }
                        });

                        // Creates a layer above the map displaying the user's location
                        map.addLayer({
                            'id': 'userLocation',
                            'type': 'symbol',
                            'source': 'userLocation',
                            'layout': {
                                'icon-image': 'userpin', // Pin Icon
                                'icon-size': 0.05, // Pin Size
                                'icon-allow-overlap': true // Allows icons to overlap
                            }
                        });

                        // Map On Click function that creates a popup displaying the user's location
                        map.on('click', 'userLocation', (e) => {
                            const description = "You are here";

                            new mapboxgl.Popup()
                                .setLngLat(userLocation)
                                .setHTML(description)
                                .addTo(map);
                        });

                        // Change the cursor to a pointer when the mouse is over the userLocation layer.
                        map.on('mouseenter', 'userLocation', () => {
                            map.getCanvas().style.cursor = 'pointer';
                        });

                        // Defaults
                        // Defaults cursor when not hovering over the userLocation layer
                        map.on('mouseleave', 'userLocation', () => {
                            map.getCanvas().style.cursor = '';
                        });
                    }
                });
            }
        );
    });
}

// Call the function to display the map with the user's location and event pins
showMap();