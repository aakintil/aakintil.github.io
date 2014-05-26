/////////////////////////
// Main Application File
/////////////////////////

var highlight = { 
  work: "#428cff", 
  contact: "#4ad6de", 
  about: "#613db5"
}

// Document ready 
$(document).ready( function() {
  $("#nav ul li").hover( function() {
    var el = $(this).attr("class"); 
    var border_color = "2px solid " + highlight[ el ];
    $( this ).css({ border: border_color })  
  }, 
  function() {
    if ( !$( this ).hasClass("active") )
    $( this ).css({ border: "2px solid transparent" }); 
  })


}); 



