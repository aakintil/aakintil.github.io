//////////////
// Functions
//////////////

function drop_gallery() {
  var obj = []; 
  var $this = ""; 
  $(".gallery").each( function(i) {
    $this = $(this); 
    obj[i] = $this; 
  }); 
  TweenMax.staggerTo( obj, 1,  { css: { opacity: 1 }, ease: "Power4.easeIn", delay: 1.5 }, 0.40 );  
}



function drop_current_page( o ) {
  // $("#content").addClass("pt-page-rotatePushRight"); 
  var obj = []; 
  var $this = ""; 
  $(".gallery").each( function(i) {
    $this = $(this); 
    obj[i] = $this; 
  }); 
  TweenMax.staggerTo( obj, 1,  { css: { opacity: 0 }, ease: "Power4.easeIn", onComplete: hide() }, 0.20); 
  // TweenMax.staggerTo( obj, 1,  { css: { left: "-1500px" }, ease: "Power4.easeIn", onComplete: hide() }, 0.1); 
}


function hide( t ) {
  // $("#content").empty(); 
}

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

  var obj = {
    avant_garde : new Page( "Avant-Garde", "AG", contents.avant_garde ),
    ipad : new Page( "iPad Magazine", "I", contents.ipad ),
    biologic : new Page( "Biologic", "B", contents.biologic ), 
    hri : new Page( "Human Robot Interaction", "HRI", contents.hri ),
    tea : new Page( "Tea", "T",  contents.tea ),
    apartment_reviews : new Page( "Apartment Reviews", "ar", contents.apartment_reviews ), 
    hex : new Page( "Hex Tiles", "H", contents.hex ),
    waffle : new Page( "Waffle Canopy", "W", contents.waffle ),   
    contact_me : new Page( "Contact Me", "CM",  contents.contact_me ) 
  }


  for (i in obj) {
    _project_pages.add( i, obj[i] )
  }

}
