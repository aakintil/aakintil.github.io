/////////////////////////
// Main Application File
/////////////////////////

var highlight = { 
  work: "#428cff", 
  contact: "#4ad6de", 
  about: "#613db5"
}
// console.log("global variable ", sessionStorage)
var page = ""; 

// Document ready 
$(document).ready( function() {
  var nav = $("#nav"); 
  var content = $("#content"); 
  var footer = $("#footer"); 
  var project = $("#project"); 

  if ($("body").attr("id") === "home-body" ) {
  TweenLite.to(nav, 1.5, { opacity: 1, delay: 0.25, onComplete: function() {
    TweenLite.to(content, 1.5, { opacity: 1, delay: 0.25, onComplete: function() {
      TweenLite.to(footer, 1.5, { opacity: 1 } ); 
    }
  }); 
}
});
}



// different color hover effects for menu links
$("#nav ul li").hover( function() {
  var el = $(this).attr("class"); 
  var border_color = "2px solid " + highlight[ el ];
  $( this ).css({ border: border_color })  
}, 
function() {
  if ( !$( this ).hasClass("active") )
  $( this ).css({ border: "2px solid transparent" }); 
}); 


}); 


