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
    $(this).animate({"background-color" : "red", 
    opacity : 1,
    "box-shadow" : "1px solid black" }, 500);
    },function() {
    $(this).animate({ "background-color" : "transparent", opacity : 0.2 }, 500);
  });

  
}); 


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css(
    {
      marginTop: (parent.height() - $(el).outerHeight()) / 2
    });
  }