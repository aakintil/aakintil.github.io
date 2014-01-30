/////////////////////////
// Main Application File
/////////////////////////
// console.log("is this a mobile device? ", _mobile)
// Global variables
var projects, 
type_containers, 
name_containers, 
plus_icon_containers = ""; 

// ** Important **
var _project_pages = new Pages( 9 );
_gallery = []; 

// Document ready 

$("#header").css( { top: "-50px", opacity: 0 } ); 
$(".gallery").css( { opacity: 0 } ); 

enquire.register("screen and (min-width: 770px)", {
  setup : function() {
    console.log("setup"); 
    // console.log($(window).width())

    ( $(window).width()  < 770 ) ? $("#toggle-menu").addClass("vertical") : $("#toggle-menu").removeClass("vertical")
    // Load in content via AJAX (just the once)
  },
  match : function() {
    $("#toggle-menu").removeClass("vertical")
    // Show sidebar
  },
  unmatch : function() {
    $("#toggle-menu").addClass("vertical")
    // Hide sidebar
  }
});




$(document).ready( function() {

  $("#logo").add($("#contact").add($("#resume"))).hover( function() {
    TweenLite.to($(this), 1, { top: "20px" } ); 
  }, function() {
    $(this).attr("id") === "logo" ? TweenLite.to( $(this), 0.5, { top: "0" } ) : TweenLite.to( $(this), 1, { top: "-6px" } );  
  }); 
  
  $("#logo").on("tapone", function() {
    window.location.href="https://aderinsola.com";
  }); 


  
  
  // on load animation
  TweenLite.to( $("#header"), 2, { opacity: 1, top: 0,  ease: "Back.easeOut", onComplete: drop_gallery(), delay: 1.5 } ); 
  // console.log( TweenLite.prototype)

  var projects = $(".project-containers"); 
  
  // create all my project pages
  create_pages(); 

  // the plus icon hover in the project containers
  $(".project-containers .more").hover( function() {
    TweenLite.to( this, 1, { bottom: "10px", color: "#fff", ease: "SlowMo.easeIn" } ); 
  }, function() {
    TweenLite.to( this, 1, { bottom: "0", color: "#22b1ba", ease: "Bounce.easeOut" } ) 
  } ); 



  // the plus icon click page animation / transitions
  $(".project-containers .more").on("click", function() {
    var page_tag = $(this).attr("tag")
    var page = _project_pages.findTag( page_tag ); 
    page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page(); 
    TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px",  ease: "SlowMo.easeIn", delay: 1 }); 
    TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );
  })
  
  // closing the project page
  // the plus icon click page animation / transitions

    // console.log(_gallery)

  // logo animation...have to think of better ones
  // $("#logo").hover( function() {
  //   $(this).toggleClass("rotate60"); 
  // } ); 

  // animating the elements within the projects containers
  projects.animate_children( _mobile );

  // menu toggle functions and event listeners
  $("#toggle-menu").toggle_menu(); 
}); 



