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

$("#header").css( { top: "-50px", opacity: 0 } ); 
$(".gallery").css( { opacity: 0 } ); 

$(document).ready( function() {
  
  // on load animation
  TweenLite.to( $("#header"), 2, { opacity: 1, top: 0,  ease: "Power2.easeInOut", onComplete: drop_gallery() } ); 
  console.log( TweenLite.prototype)

function drop_gallery() {
    var obj = []; 
    var $this = ""; 
    $(".gallery").each( function(i) {
      $this = $(this); 
      obj[i] = $this; 
    }); 
    TweenMax.staggerTo( obj, 1,  { css: { opacity: 1 }, ease: "Power4.easeIn", delay: 1.5 }, 0.40 );  
  }

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
        timeline.to( [resume, contact ], 1, {  marginLeft: 0, ease: "Power.easeInOut",  onComplete: rotate45($this, true)  });
        timeline.to( [resume, contact ], 0.5, { opacity: 1 }); 
      }
      else {
        $this.find("h1").removeClass("rotate");
        timeline.to( [resume, contact ], 0.5, { opacity: 0 }); 
        timeline.to( [resume, contact ], 2, {  marginLeft: "-500px", ease: "Power.easeInOut",  onComplete: rotate45($this, false)  });
      }

    } ); 

  }; 


  function rotate45(t, r) {
    r === true ? t.find("h1").addClass("rotate45") : t.find("h1").removeClass("rotate45"); 
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
      TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this) } );

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
  } ); 



  // the plus icon click page animation / transitions
  $(".project-containers .more").on("click", function() {
    // console.log( $(this).parent().find("name") ); 
    // var page_tag = $(this).siblings(".name").text(); 
    var page_tag = $(this).attr("tag")
    var page = _project_pages.findTag( page_tag ); 
    page !== undefined ? drop_current_page( $(this).parent() ) : show_page() ; 
  })


  // logo animation...have to think of better ones
  $("#logo").hover( function() {
    $(this).toggleClass("rotate60"); 
  } ); 

  // animating the elements within the projects containers
  projects.animate_children(); 

  // menu toggle functions and event listeners
  $("#toggle-menu").toggle_menu(); 
}); 





//////////////
// Functions
//////////////

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


