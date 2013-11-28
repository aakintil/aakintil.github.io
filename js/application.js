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
  centerElements($(".circle")); 
  var images = [ a = { src : "images/pptv/pptv.png", name : "pptv" }, 
  b = { src : "images/apartment-reviews/ar.png", name : "ar" }, 
  c = { src : "images/cdf/tea.png", name : "tea" }, 
  d = { src : "images/ixdf/avant-garde/ag.png", name : "ag" }, 
  e = { src : "images/ixdf/ipad/ipad.png", name : "ipad" }, 
  f = { src : "images/biologic/biologic.png", name : "biologic" }
  ];

    $(".gallery").each(function(i) {
      if ($(this).attr("id") === images[i].name)
      $(this).css({ "background-image" : "url("+ images[i].src +")"})
    })

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


  $("#first").on("click", function() {
    
    $("#content").children().hide("slow"); 
    
    $("#title").html(pages.project1.title); 
    $("#header").css({ "background-image" : "url("+pages.project1.img_src+")"}); 
    $("#content").append(pages.project1.content.synopsis); 
    $("#content").append(pages.project1.content.skills); 
    $("#content").append(pages.project1.images); 

  })
  
  

  // end of on load
}); 


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css({ marginTop: (parent.height() - $(el).outerHeight()) / 2 });
}

// might make a pages js file later
var pages = {
  project1 : {
    title : "PPTV", 
    img_src : "images/bg.gif", 
    images : "<div class='col-md-3 col-md-offset-3'> d</div> <div class='col-md-3'> d</div> <div class='col-md-4 col-md-offset-2'> d</div> <div class='col-md-4'> d</div>", 
    content : {
      synopsis : "<div><p id='blurb'>This is a project I worked on during parts of my junior and senior years under Scott Davidoff and John Zimmerman. The main design for PPTV had already been produced, so I was tasked with the interaction design and information architecture of system. I created a prototype for manual data entry that looked into the information architecture of the system and a prototype for exhibiting the interaction that would occur if a user were to use the system's menu. Full documentation for the interaction design can be viewed here. Full documentation for the information architecture can be viewed here</p> </div>", 
      skills : "<div id='skills' class='col-md-12'> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6, paper prototypes, Balsamiq, HTML, CSS</div>",  
    }
  }, 

  project2 : {
    title : "SnakeValance", 
    img_src : ""
  }, 

  project3 : {
    title : "Tea", 
    img_src : ""
  }


}
