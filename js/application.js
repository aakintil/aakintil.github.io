$(document).ready(function() {
  
  // vertically centering the home navigation elements
  var work = $("#work"), 
  resume = $("#resume"), 
  contact = $("#contact"); 

  var elements = [work, resume, contact]; 

  for (var i = 0; i < 3; i++) {
    centerElements(elements[i]); 
  }

  centerElements($(".nav div")); 


  $(".nav").hover(function(){
    // animating the main div
    $(this).animate({"background-color" : "#b7e3f9",  //rgba(150, 209, 252, 0.8)", 
    opacity : 1,
    "box-shadow" : "1px solid black" }, 1000);
  },function() {
    $(this).animate({ "background-color" : "transparent", opacity : 0.2 }, 1000);
  });
  
  // animating the click
  $(".nav").on("click", function() {
    $("#home").animate({ height: 0 }, 1000, function() {  $(this).hide(); $("#main").show("slow") }); 
  }); 

}); 


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css(
    {
      marginTop: (parent.height() - $(el).outerHeight()) / 2
    });
  }