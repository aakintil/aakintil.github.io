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


  $.fn.animate_children_second = function () {
    var view_more_container, type_container, name_container = "";     
    this.hover ( function () {
      view_more_container = $(this).find(".more"); 
      type_container      = $(this).find(".type"); 
      name_container      = $(this).find(".name");
      // mouseenter function
      var $this = $(this); 

      name_container.animate( { opacity: 0.3, "font-size": "200px" }, 1000, "easeOutBounce" );

      type_container.add(view_more_container).animate( { opacity: 1 }, 1000 ); 


    }, function () {
      type_container.add(view_more_container).animate( { opacity: 0.4 }, 900, function() {
        // alert("complete")
        var $this = $(this); 
        console.log($this)
        name_container.animate( { opacity: 1, "font-size": "80px" }, 2000, "easeOutElastic" ); 
        type_container.add(view_more_container).animate( { opacity: 0 }, 900 )
      });                                                                                                                                                                                                                                                                                                                                                                   
    });
  }



  $.fn.animate_children = function () {
    var view_more_container, type_container, name_container = "";     
    this.hover ( function () {
      view_more_container = $(this).find(".more"); 
      type_container      = $(this).find(".type"); 
      name_container      = $(this).find(".name");
      // mouseenter function
      var $this = $(this); 

      $this.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
      TweenLite.to( $this, 1, { top: "-20px"} ); 
      TweenLite.to( name_container, 1, {  fontSize: "200px", opacity: 0.1, ease:Power2.easeInOut, onComplete: show_others(1) } );
    }, function () {
      TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease:Power2.easeInOut, onComplete: callback(this) } );

    }); 


    function callback(t) {
      show_others( 0 ); 
      TweenLite.to( t, 1, { top: "0" } ); 
      $(t).animate({ borderWidth: "2px", borderColor: "#918E8C" }, 2000, "easeOutCirc"); 
    }
    function show_others( o ) {
      var timeline = new TimelineLite();  
      timeline.to( [type_container, view_more_container ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#4ad6de"  } ); 
    }                                                                                                                                                                                                                                                                                                                                                                  
  }


  // home page project container hover event listener
  projects.on( "click", show_page ); 

  projects.animate_children(); 

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


