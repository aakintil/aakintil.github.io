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
  var ani_speed = 1;
  $("#logo").add($("#contact").add($("#resume"))).hover( function() { 
     $(this).attr("id") === "logo" ? ani_speed = 0.2 : ani_speed = 1;  
     TweenMax.to($(this), ani_speed, { top: "20px" } ); 
     
  }, function() {
    $(this).attr("id") === "logo" ? 
    TweenMax.to( $(this), ani_speed, { top: "0" } ) : 
    TweenLite.to( $(this), ani_speed, { top: "-6px" } );  
  }); 
  

  
  $("#logo").on("tapone", function() {
    window.location.href="https://www.aderinsola.com";
  }); 


  
  
  // on load animation
  TweenLite.to( $("#header"), 1.8, { opacity: 1, top: 0,  ease: "Back.easeOut", onComplete: drop_gallery(), delay: 2 } ); 
  // console.log( TweenLite.prototype)

  var projects = $(".project-containers"); 
  
  // create all my project pages
  create_pages(); 

  // the plus icon hover in the project containers
  $(".project-containers .more").init_plus_buttons();



  
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



