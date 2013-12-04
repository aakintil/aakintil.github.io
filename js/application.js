


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
  centerElements($(".gallery")); 
  // centerElements($(".pieces img"));




  // icon hover
  // might have to change
  var social = $("#footer a"); 
  social.hover(function() {
    $(this).animate({ opacity : 1}); 
  }, function() {
    $(this).animate({ opacity : 0.5}); 
  }); 


  var images = [ a = { src : "images/pptv/pptv2.png", name : "pptv" }, 
  b = { src : "images/apartment-reviews/ar2.png", name : "ar", title : "apartment reviews" }, 
  c = { src : "images/cdf/tea2.png", name : "tea" }, 
  d = { src : "images/ixdf/avant-garde/ag2.png", name : "ag", title : "avant-garde" }, 
  e = { src : "images/ixdf/ipad/ipad2.png", name : "ipad" }, 
  f = { src : "images/biologic/biologic2.png", name : "biologic" }
  ];




  $(".gallery").each(function(i) {
    if ($(this).attr("id") === images[i].name) 
    $(this).css({ "background-image" : "url("+ images[i].src +")"}); 
    if (images[i].title !== undefined)
    $(this).attr("title", images[i].title);
    else
     $(this).attr("title", images[i].name);
  })


  $(".grid").hover(function () {
    $(this).css({ "backgroundColor": "rgba(52, 73, 94, 1)" }, 10);
  }, function () {
    $(this).css({ "backgroundColor" : "white"}, 10)
  }
);

$(".grid").on("click", function () {
  var page = $(this); 
  var title = $(this).find(".gallery").attr("title"); 

  $(this).addClass("pt-page-scaleDownUp pt-page-delay200"); 
  $(".grid").not($(this)).each(function() {
    $(this).addClass('tr-scale-down'); 
  }); 
  
  console.log(title);
  });
  // $("#content").children().fadeTo(1000, 0, function() {
  //   // $("#content").empty(50); 
  //   $("#content").html(pages.project1.content).children().addClass("pt-page-scaleUpCenter"); 
  // }); 
    // $("#content").html(pages.project1.content); 
    
    // $("#content").children().fadeTo("slow", 1, function() {
      // $(this).addClass("pt-page-moveFromRight", 1000)
    // }); 

    //addClass("tr-expand").animate("opacity", 1); 
  // });
 
  
  // $("#content").css('visibility','hidden')
  
  // $("#content").fadeOut(1000, function(){
  //     // $(this).empty().append(pages.project1.content);//.addClass("tr-expand").show();
  //     $(this).addClass("tr-scale-down"); 
  //     $(this).html(pages.project1.content); 
  //     
  //     
  //     
  //     
  //     // $(this).children().addClass("tr-down-scaled"); 
  //     // if ( ! $(this).data("open")) {
  //     //   // $(this).data("open", true); 
  //     //   $(this).show( function() {
  //     //     // $(this).children().data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
  //     //   }); 
  //     // }
  //     // $
  //     // works kinda well
  //     // $("#pieces-container").animate({  "opacity" : 1 }) 
  //     // $("#pieces-container").removeClass("tr-down-scaled").addClass("tr-scale-up"); 
  //     // $(this).children().css({ "opacity" :  "0.2"} ).addClass("tr-scale-up").show();
  // });
    // $("#content").empty(2000)
    // $("#content").hide(2000); 
    // $("#content").append(pages.project1.content); 
    // $("#content").addClass("tr-expand").show(1000);



    


  $(".nav").hover(function(){
    // animating the main div
    $(this).animate({"background-color" : "#b7e3f9",  //rgb: 117, 224, 249  rgba(150, 209, 252, 0.8)", 
    opacity : 1,
    "box-shadow" : "1px solid black" }, 1000);
  },function() {
    $(this).animate({ "background-color" : "transparent", opacity : 0.2 }, 1000);
  });





  // animating the click
  // $(".nav").on("click", function() {
  //   $("#home").animate({ height: 0 }, 1000, function() {  $(this).hide(); $("#main").show("slow") }); 
  // }); 





  // $("#top-nav a").on("click", function() {
  //   if (findPage(pages, $(this).attr("title")) !== null) {
  //     // console.log(findPage(pages, $(this).attr("title")), " found it"); 
  //     var page = findPage(pages, $(this).attr("title")); 
  //     $("#content").children().hide("slow"); 
  //     $("#title").html(page.title); 
  //     $("#header").css({ "background-image" : "url("+page.img_src+")"}); 
  //     $("#content").append(page.content); 
  //     
  //     // set link to active
  //     $("#top-nav a").removeClass("active"); 
  //     $(this).addClass("active")
  //   }
  // 
  // })



  // end of on load
}); 

// Icon information 
var icons = {
  email : { color : "images/icons/email-color.png", org : "images/icons/email.png" }, 
  facebook : { color : "images/icons/facebook-color.png", org : "images/icons/facebook.png"}, 
  google : { color : "images/icons/google-color.png", org : "images/icons/google.png"}, 
  pinterest : { color : "images/icons/pinterest-color.png", org : "images/icons/pinterest.png"}, 
  soundcloud : { color : "images/icons/soundcloud-color.png", org : "images/icons/soundcloud.png"}
}


function centerElements(el) {
  var parent = $(el).parent(); 

  $(el).css({ marginTop: (parent.height() - $(el).outerHeight()) / 2 });
}

// might make a pages js file later
var pages = {
  
  project1 : {
    title : "PPTV", 
    img_src : "images/bg.gif", 
    images : "<div class='col-md-4 col-md-offset-4'> d</div> <div class='col-md-4'> d</div>", 
    content :
      "<div class='col-md-8' id='pieces-container'>\
         <p id='description'>\
           I worked for <a class='project-links' target='_blank' href='http://clickbrands.com/'>ClickBrands</a> as a Front-End Developer. It was my first real front-end gig and I bloody loved it! Initially, I got my feet wet with a project called <a class='project-links' target='_blank' href='http://www.apartmentlinks.com/'>Apartment Links</a>, but the bulk of our time and effort was spent revamping their old apartment ratings site to Apartment Reviews. The best part was that because we had a small team, I not only did front-end tasks, but I designed mockups, helped with rails logic, and migrated the working front-end prototypes into the rails application.\
         </p>\
           <div class='col-sm-6 col-md-12 pieces'><img src='images/apartment-reviews/property-page2.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/city-page2.png'/></div>\
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/dashboard.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/apartment-cards.png'/></div>\
         </div>\
         <div class='col-md-4' id='details-container'>\
           <h4> Project Details </h4>\
           <div>\
             <p class='title'> Context </p>\
             <p> Research </p>\
           </div>\
           <div>\
             <p class='title'>Dates</p>\
             <p>June 2013 - N/A </p>\
           </div>\
           <div>\
             <p class='title'> Methods Used </p>\
             <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6, Ruby on Rails, HTML, CSS, Javascript</p>\
           </div>\
           <div>\
             <a class='btn btn-primary' href='downloads/pptv.zip' target='_blank'> Download </a>\
           </div>\
         </div>"
  }, 
  project2 : {
    title : "Apartment Reviews", 
    img_src : "images/bg.gif", 
    images : "<div class='col-md-4 col-md-offset-4'> d</div> <div class='col-md-4'> d</div>", 
    content :
      "<div class='col-md-8' id='pieces-container'>\
         <p id='description'>\
           I worked for <a class='project-links' target='_blank' href='http://clickbrands.com/'>ClickBrands</a> as a Front-End Developer. It was my first real front-end gig and I bloody loved it! Initially, I got my feet wet with a project called <a class='project-links' target='_blank' href='http://www.apartmentlinks.com/'>Apartment Links</a>, but the bulk of our time and effort was spent revamping their old apartment ratings site to Apartment Reviews. The best part was that because we had a small team, I not only did front-end tasks, but I designed mockups, helped with rails logic, and migrated the working front-end prototypes into the rails application.\
         </p>\
           <div class='col-sm-6 col-md-12 pieces'><img src='images/apartment-reviews/property-page2.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/city-page2.png'/></div>\
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/dashboard.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/apartment-cards.png'/></div>\
         </div>\
         <div class='col-md-4' id='details-container'>\
           <h4> Project Details </h4>\
           <div>\
             <p class='title'> Context </p>\
             <p> Summer Job </p>\
           </div>\
           <div>\
             <p class='title'>Dates</p>\
             <p>June 2013 - N/A </p>\
           </div>\
           <div>\
             <p class='title'> Methods Used </p>\
             <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6, Ruby on Rails, HTML, CSS, Javascript</p>\
           </div>\
           <div>\
             <p class='title'> Collaborators </p>\
             <p>\
               Jonathan Miller, Joshua Gerbasi, Daniel Muller, Justin Edwards, Rebecca Chen\
             </p>\
           </div>\
           <div>\
             <a class='btn btn-primary' href='http://www.apartmentreviews.net/' target='_blank'> Visit Site </a>\
           </div>\
         </div>"
  }, 

  project3 : {
    title : "Tea", 
    img_src : "", 
    content : "<div class='col-md-8' id='pieces-container'><p id='description'>This was my Communication Design Fundamentals final project. Our assignment was to create a booklet about anything we want. I decided to create a couple spreads about different teas from different areas. Some of the teas were borrowed from my roommate, while the others were given to me by the owners of Margaret's Fine Imports</p><div class='col-sm-6 col-md-12 pieces'><img src='images/cdf/img1.png'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/write1.png'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/img2.jpg'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/end.jpg'/></div></div><div class='col-md-4' id='details-container'><h4> Project Details </h4><div><p class='title'> Context </p><p> Summer Research</p></div><div><p class='title'>Dates</p><p>October - December 2011 & June - August 2012</p></div><div><p class='title'> Methods Used </p><p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6, Photography</p></div><div><a class='btn btn-primary' target='_blank' href='downloads/tea-booklet.pdf' download='tea.pdf'> Download </a></div></div></div>"
  }, 
  project4 : {
    title : "Avant-Garde", 
    img_src : "", 
    content :
      "<div class='col-md-8' id='pieces-container'>\
         <p id='description'>\
           This was a course project where we were tasked with designing a poster for an upcoming Avant Garde Colloqium. We had to create a poster for a lecture series that will be displayed in a University Union Building kiosk. We used text and images to communicate informational and emotional content. We produced at least ten sketches of different designs using grid, content, and images. We also employed a variety of typefaces and sizes to explore hierarchy.\
         </p>\
           <div class='col-sm-6 col-md-12 pieces'><img src='images/apartment-reviews/property-page2.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/city-page2.png'/></div>\
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/dashboard.png'/></div> \
           <div class='col-sm-6 col-md-12 pieces'> <img src='images/apartment-reviews/apartment-cards.png'/></div>\
         </div>\
         <div class='col-md-4' id='details-container'>\
           <h4> Project Details </h4>\
           <div>\
             <p class='title'> Context </p>\
             <p> Interaction Design Fundamentals (05-651) </p>\
           </div>\
           <div>\
             <p class='title'>Dates</p>\
             <p> September 2013 </p>\
           </div>\
           <div>\
             <p class='title'> Methods Used </p>\
             <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6</p>\
           </div>\
           <div>\
             <a class='btn btn-primary' href='downloads/poster.pdf' download='poster.pdf 'target='_blank'> Download </a>\
           </div>\
         </div>"
  }, 
  
  project5 : {
     title : "iPad Mag", 
     img_src : "", 
     content :"<div class='col-md-8' id='pieces-container'>\
          <p id='description'>\
            This was a course project where we were tasked with designing an iPad Magazine within a given four categories: Travel, Personal Finance, Desserts, and Gardening. We you selected a target audience, developed personas, created a mood board for inspiration, generated concepts, developed a design language and color palette, and designed simple navigation. Our design layouts had to be 768 by 1024 pixels (iPad screen size).\
          </p>\
            <div class='col-sm-6 col-md-12 pieces'><img src='images/ixdf/ipad/coming-soon.png'/></div> \
            <div class='col-sm-6 col-md-12 pieces'> <img src='images/ixdf/ipad/coming-soon2.png'/></div>\
          </div>\
          <div class='col-md-4' id='details-container'>\
            <h4> Project Details </h4>\
            <div>\
              <p class='title'> Context </p>\
              <p> Interaction Design Fundamentals (05-651) </p>\
            </div>\
            <div>\
              <p class='title'>Dates</p>\
              <p> October - December 2013 </p>\
            </div>\
            <div>\
              <p class='title'> Methods Used </p>\
              <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6</p>\
            </div>\
            <div>\
              <a class='btn btn-primary disabled' href='downloads/iPad.pdf' download='iPadMag.pdf 'target='_blank'> Unavailable </a>\
            </div>\
          </div>"
   },
   
   project6 : {
      title : "Biologic", 
      img_src : "", 
      content :"<div class='col-md-8' id='pieces-container'>\
           <p id='description'>\
             This was a course project where we were tasked with designing an iPad Magazine within a given four categories: Travel, Personal Finance, Desserts, and Gardening. We you selected a target audience, developed personas, created a mood board for inspiration, generated concepts, developed a design language and color palette, and designed simple navigation. Our design layouts had to be 768 by 1024 pixels (iPad screen size).\
           </p>\
             <div class='col-sm-6 col-md-12 pieces'><img src='images/biologic/coming-soon.png'/></div> \
             <div class='col-sm-6 col-md-12 pieces'> <img src='images/biologic/coming-soon2.png'/></div>\
           </div>\
           <div class='col-md-4' id='details-container'>\
             <h4> Project Details </h4>\
             <div>\
               <p class='title'> Context </p>\
               <p> Interaction Design Fundamentals (05-651) </p>\
             </div>\
             <div>\
               <p class='title'>Dates</p>\
               <p> October - December 2013 </p>\
             </div>\
             <div>\
               <p class='title'> Methods Used </p>\
               <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6</p>\
             </div>\
             <div>\
               <a class='btn btn-primary disabled' href='downloads/biologic.pdf' download='biologic.pdf 'target='_blank'> Unavailable </a>\
             </div>\
           </div>"
    }, 
    
    
    project7 : {
        title : "Me", 
        img_src : "", 
        content :"<div class='col-md-8' id='pieces-container'>\
             <p id='description'>\
               This was a course project where we were tasked with designing an iPad Magazine within a given four categories: Travel, Personal Finance, Desserts, and Gardening. We you selected a target audience, developed personas, created a mood board for inspiration, generated concepts, developed a design language and color palette, and designed simple navigation. Our design layouts had to be 768 by 1024 pixels (iPad screen size).\
             </p>\
               <div class='col-sm-6 col-md-12 pieces'><img src='images/biologic/coming-soon.png'/></div> \
               <div class='col-sm-6 col-md-12 pieces'> <img src='images/biologic/coming-soon2.png'/></div>\
             </div>\
             <div class='col-md-4' id='details-container'>\
               <h4> Project Details </h4>\
               <div>\
                 <p class='title'> Context </p>\
                 <p> Interaction Design Fundamentals (05-651) </p>\
               </div>\
               <div>\
                 <p class='title'>Dates</p>\
                 <p> October - December 2013 </p>\
               </div>\
               <div>\
                 <p class='title'> Methods Used </p>\
                 <p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6</p>\
               </div>\
               <div>\
                 <a class='btn btn-primary disabled' href='downloads/iPad.pdf' download='iPadMag.pdf 'target='_blank'> Unavailable </a>\
               </div>\
             </div>"
      }
}


function findPage(obj, input) {
  var i = 0; 
  for (i in obj) {
    if (obj[i].title.toLowerCase() === input)
    return obj[i]; 
  }
  
  return null; 
}


function callback(){
  console.log("please")
  // $(".grid").hide()
}
