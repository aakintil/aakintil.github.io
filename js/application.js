$(document).ready(function() {

  // vertically centering the home navigation elements
  var work = $("#work"), 
  resume = $("#resume"), 
  contact = $("#contact"); 

  var elements = [work, resume, contact]; 

  for (var i = 0; i < 3; i++) {
    centerElements(elements[i]); 
  }

}); 


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css(
    {
      marginTop: (parent.height() - $(el).outerHeight()) / 2
    });
  }