/////////////////////////
// Main Application File
/////////////////////////

// Global variables
var projects, 
type_containers, 
name_containers, 
plus_icon_containers = ""; 

// ** Important **
var _project_pages = new Pages( 9 );

// Document ready 
$(document).ready( function() {

  // create all my project pages
  create_pages(); 

  // set necessary variables 
  projects = $(".project-containers"); 

  name_containers = projects.find(".name"); 
  var names = name_containers.children(); 

  type_containers = projects.find(".type"); 
  var types = type_containers.children(); 

  plus_icon_containers = projects.find(".more"); 
  var plus_icons = plus_icon_containers.children(); 

  // home page project container hover event listener
  // projects.hover( animate_content, reset_project_elements );
  projects.on( "click", show_page ); 
}); 





//////////////
// Functions
//////////////

// show page function 
function show_page() {

}

// home page project container hover event function
function animate_content() {
  plus_icon_containers.css( {  display: "block"  } ); 
  type_containers.css( {  display: "block"  } ); 

  projects.children().animate( {  position: "relative", 
  height: "33.33333333333333%", 
  padding: "0px 5px"  } ); 
}

function reset_project_elements() {

  plus_icon_containers.css( {  display: "none"  } ); 
  type_containers.css( {  display: "none"  } );

  name_containers.animate( {  width: "100%", 
  height: "100%", 
  "text-align": "center"  } );
}

function create_pages() {

  var avant_garde = new Page( "Avant-Garde", contents.avant_garde ); 
  var ipad = new Page( "iPad Magazine", contents.ipad ); 
  var biologic = new Page( "Biologic", contents.biologic ); 
  var hri = new Page( "Human Robot Interaction", contents.hri );
  var tea = new Page( "Tea", contents.tea );
  var apartment_reviews = new Page( "Apartment Reviews", contents.apartment_reviews ); 
  var hex = new Page( "Hex Tiles", contents.hex );
  var waffle = new Page( "Waffle Canopy", contents.waffle );   
  var contact_me = new Page( "Contact Me", contents.contact_me ); 

  // add all the pages into the containing object 
  // _project_pages.add(); 
}


// 
// .project-containers:hover > div {
  //   
  // }
  // 
  // .project-containers:hover .name p {
    //   position: absolute;
    //   left: 0;
    //   margin-top: -30px;
    // }
    // */
    // 
    // 
    // /*.project-containers:hover .name {
      // float: left;
      // width: 75px;
      // height: 75px;
      // }*/
