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

  // slowly load and animate the page
  $("#nav").animate({ opacity: 1 }, 1900, function() {
    $("#content").animate({ opacity: 1 }, 1500, function() {
      $("#footer").animate({ opacity: 1 }, 1000)
    })
  });

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

  // console.log("the contents ", contents)
  $(".card").on("click", function() {
    var value = $(this).attr("id"); 
    var body = contents[value]

  } ); 


  // 
  $('#project').on('click', "#close", function () {
    console.log("close"); 

  });

}); 


