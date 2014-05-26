/////////////////////////
// Main Application File
/////////////////////////

// Document ready 
$(document).ready( function() {
  $("#nav ul li").hover( function() {
    var el = $(this).attr("class"); 
    
    var highlight = { work: "", contact: "", about: ""}
    console.log( highlight[ el ] );  
  })


}); 



