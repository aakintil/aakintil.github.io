$(document).ready(function() {

  // vertically centering the home navigation elements
  var work = $("#work"), 
  resume = $("#resume"), 
  contact = $("#contact"); 

  var elements = [work, resume, contact]; 

  for (var i = 0; i < 3; i++) {
    centerElements(elements[i]); 
  }
  
  centerElements($(".nav"))

  // var workCont = new Transition(work.parent()); 
 
  work.parent().on("vmouseover", function() {
    work.parent().parent().animate({ backgroundColor: "blue" }, 800); 
  })
  // 
  // work.parent().on("vmouseout", function() {
  //   work.parent().animate({ opacity: 1 }, 800); 
  // })
  
}); 


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css(
    {
      marginTop: (parent.height() - $(el).outerHeight()) / 2
    });
  }