//////////////
// Functions
//////////////

function drop_gallery() {
  var $this = ""; 
  $(".gallery").each( function(i) {
    $this = $(this); 
    _gallery[i] = $this; 
  }); 
  TweenMax.staggerTo( _gallery, 1,  { css: { opacity: 1 }, ease: "Power4.easeIn", delay: 3 }, 0.40 );  
}

function recreate() {
  var $this = ""; 
  $(".gallery").each( function(i) {
    $this = $(this); 
    _gallery[i] = $this; 
  }); 
  console.log(_gallery)
  return _gallery; 
  // TweenMax.staggerTo( _gallery, 1,  { css: { opacity: 1 }, ease: "Power4.easeIn", delay: 3 }, 0.40 );  
}



function hide_index_page( o, page ) {
   
  var obj = []; 
  var $this = ""; 
  $(".gallery").each( function(i) {
    $this = $(this); 
    obj[i] = $this; 
  }); 
  
  var timer = 5000; 
  
  TweenMax.staggerTo( obj, 1,  { css: { opacity: 0 }, ease: "Power4.easeIn", onComplete: delay5s( show_new_page, 3000, page ) }, 0.20); 
  
  // TweenMax.staggerTo( obj, 1,  { css: { left: "-1500px" }, ease: "Power4.easeIn", onComplete: hide() }, 0.1); 
}


function hide( t ) {
  // $("#content").empty(); 
}

// show page function 
function delay5s( fn, timer, page ) {
  if ( page )
  setTimeout( function() { fn( page ) }, timer); 
  else
  setTimeout( function() { fn() }, timer); 
}


function callback() {

}


function show_new_page( page ) {
  console.log( page )
  $("#content").empty();
  var content = page.content;  
  // $("#content").css("opacity", 0); 
  $("#content").append( content ); 
  console.log( typeof $("#content").children()); 
  $("#content").css("top", "50px"); 
  $("#content").children().css({ "opacity" : 0, top: "100px"} ); 
  var timeline = new TimelineLite();  
  timeline.to( $("#content").children() , 2, { css: { opacity: 1, top: 0, ease: "Expo.easeIn" } } );
  $("#content").css("padding", "0px 30px"); 
  
  
  $("#close-page").on("click", function() {
    TweenLite.to( $("#content"), 2, { top: "-400px", opacity: 0, ease: "SlowMo.easeIn", onComplete: delay5s(t, 700) });
  })
}


function t() {
  $("#content").empty();

  for (var i = 0; i < _gallery.length; i++ ) {
    $("#content").append(_gallery[i]); 
  }

  $("#content").css("padding", "0px 0px"); 
  $("#content").css("padding-bottom", "40px");
  

  TweenLite.to( $("#content"), 2.5, { top: "150px", opacity: 1, ease: "SlowMo.easeIn" });
  TweenLite.to( $("#logo"), 1, { width: "150px", height: "150px",  ease: "SlowMo.easeIn", delay: 1 }); 
  new TimelineLite().to( [ $("#contact"), $("#resume") ], 1, { width: "87.5px", height: "100px", delay: 2 } ); 

  TweenMax.staggerTo( _gallery, 1,  { css: { opacity: 1 }, ease: "Power4.easeIn", delay: 3 }, 0.40 );   
  $(".project-containers .more").init_plus_buttons();
  $(".project-containers").animate_children( _mobile );
  $(".project-containers").focusout();
  $(".gallery").focusout(); 
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


function rotate45(t, r) {
  r === true ? t.find("h1").addClass("rotate45") : t.find("h1").removeClass("rotate45"); 
}


function new_page() {
  $("#content").empty();
   
  for (var i = 0; i < _gallery.length; i++ ) {
    $("#content").append(_gallery[i]); 
  }
  
  $("#content").transition({ opacity: 1, top: 0 })
  // TweenMax.to( $("#content"), 2.5, { top: 0, opacity: 1, ease: "SlowMo.easeIn" });
}
