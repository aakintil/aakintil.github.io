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
  // $('#resume').css({ display: "none", opacity: 0 } );
// Document ready 
$(document).ready( function() {
  var projects = $(".project-containers"); 
  
  // create all my project pages
  create_pages(); 

  // $("#toggle-menu h1").css( { "background-color":  "red"}); 
  // toggle menu widget / function 
  $.fn.toggle_menu = function () {
    
    $(this).on("click", function () {
      var $this = $(this); 
      
     $this.toggleClass("open"); 
     var timeline = new TimelineLite();  

     if ( $this.hasClass("open") ) {
       timeline.to( [resume, contact ], 1, {  marginLeft: 0, ease: "Power.easeInOut",  onComplete: rotate($this, true)  });
       timeline.to( [resume, contact ], 0.5, { opacity: 1 }); 
     }
     else {
       $this.find("h1").removeClass("rotate");
       timeline.to( [resume, contact ], 0.5, { opacity: 0 }); 
       timeline.to( [resume, contact ], 2, {  marginLeft: "-500px", ease: "Power.easeInOut",  onComplete: rotate($this, false)  });
     }

   } ); 

 }; 


 function rotate(t, r) {
   r === true ? t.find("h1").addClass("rotate") : t.find("h1").removeClass("rotate"); 
 }
  
  // animate childrend widget / function 
  // move to another js file later
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
      TweenLite.to( name_container, 1, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8) } );
    }, function () {
      TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease:Power2.easeInOut, onComplete: callback(this) } );

    }); 


    function callback(t) {
      show_others( 0 ); 
      TweenLite.to( t, 1, { top: "0", ease: "Bounce.easeOut" } ); 
      $(t).animate({ borderWidth: "2px", borderColor: "#918E8C" }, 2000, "easeOutCirc"); 
    }
    function show_others( o ) {
      var timeline = new TimelineLite();  
      timeline.to( [type_container, view_more_container ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#22b1ba"  } ); 
    }                                                                                                                                                                                                                                                                                                                                                                  
  }

  
  
  // the plus icon hover in the project containers
  $(".project-containers .more").hover( function() {
    TweenLite.to( this, 1, { bottom: "10px", color: "#fff", ease: "SlowMo.easeIn" } ); 
  }, function() {
    TweenLite.to( this, 1, { bottom: "0", color: "#22b1ba", ease: "Bounce.easeOut" } ) 
  })

  // animating the elements within the projects containers
  projects.animate_children(); 

  // menu toggle functions and event listeners
  $("#toggle-menu").toggle_menu(); 
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


