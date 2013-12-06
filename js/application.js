// Global variables
var _page = ""; 
var _timer = 900; // so far the general time that works for animations/transitions
var _nav_transitions = "";
var _grid_showing = true; 


// have to hide the dropdown menu. 
$(".dropdown-menu").css({ 
  height: 0, 
  display: "none", 
  opacity: 0
}); 

  
  $(document).ready(function() {
    // Mini animation
    // hide the body, and have the logo bounce in
    $("#logo a img").css({  opacity: "0", "margin-top" : "-=100px"}); 
    $("body").fadeTo(1500, 1, function() {
      $("#logo a img").animate({  opacity: "1", "margin-top" : "+=100px"}, 1000, "easeInOutBack"); 
    });



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




    // icon hover
    // might have to change
    var social = $("#footer a"); 
    social.hover(function() {
      $(this).animate({ opacity : 1}); 
    }, function() {
      $(this).animate({ opacity : 0.5}); 
    }); 



    // Object containing the urls for all my main bg images
    var images = [ a = { src : "images/pptv/pptv2.png", name : "pptv" }, 
    b = { src : "images/apartment-reviews/ar2.png", name : "ar", title : "apartment reviews" }, 
    c = { src : "images/cdf/tea2.png", name : "tea" }, 
    d = { src : "images/ixdf/avant-garde/ag2.png", name : "ag", title : "avant-garde" }, 
    e = { src : "images/ixdf/ipad/ipad2.png", name : "ipad", title : "ipad mag" }, 
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


// The pseudo custom page navigation. 
    $(".grid").on("click", function () { 
      _grid_showing = false; 

      var title = $(this).find(".gallery").attr("title"); 
      _page = findPage(pages, title); 
      
      $("#nav-dropdown a, #top-nav a").attr("class", ""); 
      $("#nav-dropdown a, #top-nav a").each(function() {
        if ($(this).attr("title") === title) {
          $(this).addClass("active"); 
        }
      })
      // $("#nav-dropdown a, #top-nav a").attr("title", title).addClass("active").css({ opacity: 1});

      // special effect on the clicked element
      $(this).addClass("tr-scale-downUp"); 
      // hide the other elements
      $(".grid").not($(this)).each(function() {
        $(this).addClass('tr-scale-down'); 
      }); 

      _nav_transitions = "tr-scale-up"; 
      delay_page(_nav_transitions, _timer); 
    });

    function delay_page(trans, timer) {
      setTimeout(function () {  load_project_page(trans);  }, timer);
    }

    function load_project_page(transition) {
      var top = "";
      $("#top-nav").is(":visible") ? top = $("#top-nav").offset().top : top = $('#nav-dropdown').offset().top;

      // add animation to page
      $("#content").addClass(transition).html(_page.content);
      $("#title").attr("class", " "); 
      $("#title").html(_page.title).fadeTo(1000, 1);
      $("#header").css({ "backgroundImage" : "url("+ _page.img_src +")" }).fadeTo(1000, 1); 
      
      // for jjquery appear ... later implementation 
      // $(".pieces").css({ opacity : 0 }); 
      // $(".pieces").each(function() {
      //   $(this).data("data-appear-top-offset", 500)
      // }); 
       
      // move focus back to top if it's not there already
      $('html, body').animate({ scrollTop: top }, _timer+300);

       // console.log($(".pieces").is(':appeared')); 
       //  if ($(".pieces").is(":appeared")) {
       //    $(".pieces").each(function(i) {
       //      // .addClass("tr-rotateSidesIn")
       //      setTimeout(function () {  $(this).delay(8000*i).addClass("tr-rotateSidesIn"); ;  }, 5000); 
       //    })
       //  }

     
    }



    // Menu fading effect
    $("#menu").on("click", function() {
      var icon = $("#menu .menu-icon")
      if (!$("#nav-dropdown").hasClass("open")) {
        $(".dropdown-menu")
        .animate({ height: "300px" })
        .animate({opacity : 1})
        .css({display: "block"});
        //  then switch icon
        icon.html("-"); 
      }
      else {
        $(".dropdown-menu").animate({ opacity: 0 })
        .animate({  height: 0,  display: "none"})
        // then switch icon back
        icon.html("+")
      }
    })



    $("#nav-dropdown a, #top-nav a").on("click", function() {
      $("#title").fadeTo(500, 0); 
      $(".dropdown-menu").animate({ opacity: 0 })
      .animate({  height: 0,  display: "none"})
      // then switch icon back
      $("#menu .menu-icon").html("+"); 
      $("#nav-dropdown a, #top-nav a").attr("class", ""); 
      $(this).addClass("active")
      var title = $(this).attr("title"); 
      _page = findPage(pages, title);

      if (_grid_showing) {
        $(".grid").each(function() {
          $(this).removeClass("tr-scaleDown").addClass("tr-rotateSlideOut")//addClass('pt-page-rotatePushLeft'); 
        });
        _grid_showing = false; 
        _nav_transitions = "tr-scale-up"; 
        delay_page(_nav_transitions, 1500); 
      }
      else {
        var out = "tr-scale-down"; 
        _nav_transitions = "tr-scale-up"; 
        nav_page_delay(_nav_transitions, out, _timer);
      }

    })


    function nav_page_delay(_in, out, timer) {
      $("#content").attr("class", "row"); 
      $("#content").addClass(out); 
      setTimeout(function () {  load_project_page(_in);  }, timer);
    }


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
      img_src : "images/pptv/pptv-main.gif", 
      images : "<div class='col-md-4 col-md-offset-4'> d</div> <div class='col-md-4'> d</div>", 
      content :
      "<div class='col-md-8' id='pieces-container'>\
      <p id='description'>\
      This is a project I worked on during parts of my junior and senior years under Scott Davidoff and John Zimmerman. The main design for PPTV had already been produced, so I was tasked with the interaction design and information architecture of system. I created a prototype for manual data entry that looked into the information architecture of the system and a prototype for exhibiting the interaction that would occur if a user were to use the system's menu.\
      </p>\
      <div class='col-sm-6 col-md-12 pieces'><img src='images/pptv/event-summary.png'/></div> \
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/pptv/event-type.png'/></div>\
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/pptv/calendar-view.png'/></div> \
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/pptv/stickies.png'/></div>\
      </div>\
      <div class='col-md-4' id='details-container'>\
      <h4> Project Details </h4>\
      <div>\
      <p class='title'> Context </p>\
      <p> Research </p>\
      </div>\
      <div>\
      <p class='title'>Dates</p>\
      <p>October - December 2011 & June - August 2012</p>\
      </div>\
      <div>\
      <p class='title'> Methods Used </p>\
      <p> Sticky Notes, Rapid Prototyping, Balsamiq, User Testing, Adobe Illustrator </p>\
      </div>\
      <div>\
      <a class='btn btn-primary' href='downloads/pptv.zip' target='_blank'> Download </a>\
      </div>\
      </div>"
    }, 
    project2 : {
      title : "Apartment Reviews", 
      img_src : "images/apartment-reviews/ar-main.gif", 
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
      img_src : "images/cdf/tea-main.gif", 
      content : "<div class='col-md-8' id='pieces-container'><p id='description'>This was my Communication Design Fundamentals final project. Our assignment was to create a booklet about anything we want. I decided to create a couple spreads about different teas from different areas. Some of the teas were borrowed from my roommate, while the others were given to me by the owners of Margaret's Fine Imports</p><div class='col-sm-6 col-md-12 pieces'><img src='images/cdf/img1.png'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/write1.png'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/img2.jpg'/></div><div class='col-sm-6 col-md-12 pieces'> <img src='images/cdf/end.jpg'/></div></div><div class='col-md-4' id='details-container'><h4> Project Details </h4><div><p class='title'> Context </p><p> Summer Research</p></div><div><p class='title'>Dates</p><p>October - December 2011 & June - August 2012</p></div><div><p class='title'> Methods Used </p><p> Adobe InDesign CS6, Adobe Illustrator CS6, Adobe Photoshop CS6, Photography</p></div><div><a class='btn btn-primary' target='_blank' href='downloads/tea-booklet.pdf' download='tea.pdf'> Download </a></div></div></div>"
    }, 
    project4 : {
      title : "Avant-Garde", 
      img_src : "images/ixdf/avant-garde/ag-main.gif", 
      content :
      "<div class='col-md-8' id='pieces-container'>\
      <p id='description'>\
      This was a course project where we were tasked with designing a poster for an upcoming Avant Garde Colloqium. We had to create a poster for a lecture series that will be displayed in a University Union Building kiosk. We used text and images to communicate informational and emotional content. We produced at least ten sketches of different designs using grid, content, and images. We also employed a variety of typefaces and sizes to explore hierarchy.\
      </p>\
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/ixdf/avant-garde/img3.png'/></div> \
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/ixdf/avant-garde/img4.png'/></div>\
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
      img_src : "images/ixdf/ipad/ipad-main.gif", 
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
      img_src : "images/biologic/biologic-main2.gif", 
      content :"<div class='col-md-8' id='pieces-container'>\
      <p id='description'>\
      This was a course project where we were tasked with choosing an organism, researching various aspects about the organism, and through many iterating, ideating, and failing, design a responsive building technology based on the initial organism. My group decided to choose the pufferfish.\
      </p>\
      <div class='col-sm-6 col-md-12 pieces'><img src='images/biologic/coming-soon.png'/></div> \
      <div class='col-sm-6 col-md-12 pieces'> <img src='images/biologic/coming-soon2.png'/></div>\
      </div>\
      <div class='col-md-4' id='details-container'>\
      <h4> Project Details </h4>\
      <div>\
      <p class='title'> Context </p>\
      <p> Biologic (48-632)</p>\
      </div>\
      <div>\
      <p class='title'>Dates</p>\
      <p> August - December 2013 </p>\
      </div>\
      <div>\
      <p class='title'> Methods Used </p>\
      <p> Laser Cutting, Adobe Illustrator, Arduino</p>\
      </div>\
      <div>\
      <p class='title'> Collaborators </p>\
      <p>\
      Suzy Li, Fereshteh Shahmiri\
      </p>\
      </div>\
      <div>\
      <a class='btn btn-primary disabled' href='downloads/biologic.pdf' download='biologic.pdf 'target='_blank'> Coming Soon </a>\
      </div>\
      </div>"
    }, 


    project7 : {
      title : "Me", 
      img_src : "", 
      content :"<div class='col-md-12' id='personal-page'>\
      <h1> Design. Code. Build. </h1> \
      <p> I'm currently a graduate student studying Human Computer Interaction at Carnegie Mellon University. I love design, music, sports, and food. I have this problem where I can't sit still, and although i've dabbled a little with Arduino, dFab, and shop, I would love to get more experience. Ideally an interaction design gig would be awesome, but as long as I am in a situation where I am tasked with helping users in whatever fashion i'm happy! </p> \
      </p>\
      <h5> Wanna learn more? </h5> \
      <p> Checkout my <a id='resume' href='download/resume.pdf'>resume</a>! </p> \
      <h5> Get in touch...Or hire me! </h5> \
      <p> <a id='mail-me' href='mailto:akintilo@cmu.com'>akintilo@cmu.edu</a> | 240-821-3135 </p> \
      </div>"
    }
  }
  // 
  // <div class='col-sm-6 col-md-6 pieces'><img src='images/biologic/coming-soon.png'/></div> \
  // <div class='col-sm-6 col-md-6 pieces'> <img src='images/biologic/coming-soon2.png'/></div>\


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

