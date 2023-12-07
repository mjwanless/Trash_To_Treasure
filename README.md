# Project Title

Trash to Treasure

## 1. Project Description

Trash to Treasure is your ultimate resource for materials, recycling options, and convenient depot locations, ensuring all your garbage and recycling needs are met, in one place.

## 2. Names of Contributors

List team members and/or short bio's here...

-  Malcolm
-  Sebastian
-  Ephraim

## 3. Technologies and Resources Used

List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.

-  HTML, CSS, JavaScript
-  Firebase 8.0 (Authentication, Firestore, Hosting)
-  Mapbox API
-  Recycle BC (for material information)

## 4. Complete setup/installion/usage

State what a user needs to do when they come to your project. How do others start using your code or application?
Here are the steps ...

-  No installation required. 
-  Navigate to this link "https://comp-1800-group-project.web.app"
-  Login or create an account by providing an email, username, and password.
-  Navigate our web app by pressing the green buttons and two footer buttons.
-  Learn about materials, where they can be recycled, and recycling depots

## 5. Known Bugs and Limitations

Here are some known bugs:

-  If you unfavourite a location and navigate to the profiles page with the back button. The unfavourited location still appears on your profile.
-  Logout feature does not work.
-  Styling does not appear on some elements due to layout

## 6. Features for Future

What we'd like to build in the future:

-  Photo and video recognition for materials
-  Directions functionality for our map feature
-  Add animations or styling to improve app responsiveness feeling

## 7. Contents of Folder

Content of the project folder:

```
 Top level of project folder:
├── .firebaserc                        # Required for hosting our web app
├── .gitignore                         # Git ignore file
├── 404.html                           # Landing page if hosting service is down
├── depot_display.html                 # Depot html page
├── depot_locations.html               # Depot selection html page
├── display_material_information       # Material html page
├── firebase.json                      # Required for hosting our web app
├── firestore.indexes.json             # Required for hosting our web app
├── firestore.rules                    # Rules for our firebase project
├── homepage.html                      # Landing page after logging in
├── index.html                         # landing HTML file, this is what users see when you come to url
├── material_categories.html           # Category selection html page
├── material_subcategories.html        # Subcategory selection html page
├── other_resources.html               # Other resources html page
├── profile.html                       # Profile page 
└── README.md

It has the following subfolders and files:
├── .firebase                          # Required for hosting our web app
├── images                             # Folder for images
    /different_recycle_bins.jpg        # City of Burnaby website
    /hazardous_materials_image.png     # Hazardous Waste Experts website
    /recycle_bc_image.jpg              # Recycle BC website
├── scripts                            # Folder for scripts
    /authentication.js                 # Handles Firestore user authentication
    /depot_display.js                  # Reads, queries, and displays data from Firestore
    /depot_locations.js                # Reads from Firestore and dynamically loads depot buttons
    /homepage.js                       # Handle redirecting users to different pages
    /load_materials.js                 # Reads from Firestore, display information, dynamically create buttons
    /load_subcategories.js             # Reads from Firestore and dynamically create buttons
    /map.js                            # Handles logic for Mapbox API
    /material_categories.js            # Dynamically load category buttons
    /material_subcategories.js         # Dynamically load subcategory buttons
    /profile.js                        # Reads and handles updates to Firestore
    /skeleton.js                       # Loads header and footer on every page
├── styles                             # Folder for styles
    /depot_display.css                 # Styling for depot pages
    /depot_location.css                # Styling for depot location pages
    /display_material_information.css  # Styling for material pages
    /header_and_footer.css             # Styling for navbar/header and footer
    /login.css                         # Styling for landing page
    /material_categories.css           # Styling for categories page
    /material_subcategories.css        # Styling for subcategories page
    /other_resources.css               # Styling for other resources page
    /profile.css                       # Styling for profile page
    /reset.css                         # Resets styling on every page
    /style.css                         # Basic styling applied to every page               
├── text
    /footer.html                       # Footer html
    /nav_after_login.html              # Navbar html when user is logged in
    /nav_before_login.html             # Navbar html when user is not logged in
```
