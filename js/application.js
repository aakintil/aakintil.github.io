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

  // $("#project").hide()//append( contents["notebook"]); 
  // or
  // alpha:0, display:''
  TweenMax.to($('#project'), 0.2, { 
    height: 0, 
    opacity: 0
    // className: "pt-page-scaleDown", 
    // display: "none"
    });
  // $("img.lazy").lazyload();
  // $("#project img").unveil(200, function() {
  //   $(this).load(function() {
  //     this.style.opacity = 1;
  //   });
  // });
 

    // $("img.lazy").lazyload({ effect: "fadeIn" });  
  

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
    // $("#project").html( ); 

    $("#project").html( body ); 
    var h = $("#glance").height() + $("#in-depth").height(); 
    var total_height = "+=" + (1.8*h) + "px";
    console.log(total_height, " is the total height of the div" )
    
    // if ($("#project").className != "open") {
      TweenLite.to($("#project"), 2, { 
        // className: "pt-page-scaleUp", 
        height: total_height, 
        opacity: 1,
        // scaleY: 1,
        ease: Quad.easeOut 
        });
    // }
    // TweenMax.to($('#project'), 2, { height: incr,
    // onComplete: function(){ TweenMax.to($('#project'), 0.5, {css: { opacity: 1 } } ) }
  // }); 

} ); 


// 
$('#project').on('click', "#close", function () {
  console.log("close"); 
  // else {
    TweenLite.to($("#project"), 1, {
      // className: "pt-page-scaleDownCenter",
      height: 0,
      opacity: 0
      // onComplete: function() { $("#project").css({height: 0, opacity: 0}) }
      // ease: Quint.easeOut
      });
    
  // TweenMax.to($('#project'), 3, { scaleY: 1 } );
  // $("#project").empty(); 
});

}); 


// hide the projects and move left for animation
// $("#project").hide(); 
// $("#project").children().css({ opacity: 0 }); 
// $("#project").children().each( function() {
  //   $(this).css({ marginLeft: "-1000px" });  
  // } )

  // $('#project').on('click', '#close', function (event) {
    //   console.log(this)
    //   $("#project").fadeTo(0)
    // });
