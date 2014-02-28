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
_gallery = []; 


// pull header up and hide the project containers
$("#header").css( { top: "-50px", opacity: 0 } ); 
$(".gallery").css( { opacity: 0 } ); 


// Document ready 
$(document).ready( function() {

  // sometimes people's  browsers aren't at the top, 
  // so i have to force the browser there 

  TweenLite.to(window, 1, { scrollTo: { y:0 } });
  var ani_speed = 1;
  $("#logo").add($("#contact").add($("#resume"))).hover( function() { 
    $(this).attr("id") === "logo" ? ani_speed = 0.2 : ani_speed = 1;  
    TweenMax.to($(this), ani_speed, { top: "20px" } ); 

  }, function() {
    $(this).attr("id") === "logo" ? 
    TweenMax.to( $(this), ani_speed, { top: "0" } ) : 
    TweenLite.to( $(this), ani_speed, { top: "-6px" } );  
  }); 


  // redirects viewers home
  $("#logo").on("tapone", function() {
    window.location = "index.html";
  }); 


  // on load animation
  TweenLite.to( $("#header"), 1.8, { opacity: 1, top: 0,  ease: "Back.easeOut", onComplete: drop_gallery(), delay: 2 } ); 

  var projects = $(".project-containers"); 

  // create all my project pages
  create_pages(); 

  // animating the elements within the projects containers
  projects.animate_children( _mobile );

  // menu toggle functions and event listeners
  $("#toggle-menu").toggle_menu(); 
}); 



