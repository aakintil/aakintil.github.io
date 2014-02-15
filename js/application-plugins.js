// animate childrend widget / function 
// move to another js file later
var tap_tracker = []; 
var prev = 0; 
var curr = 0; 

$.fn.animate_children = function ( mobile ) {
  var view_more_container, type_container, name_container = "";  

// if ( _mobile ) {
  
  $(this).on("tapone", function(e) {
    
    tap_tracker.push($(this).attr("tag")); 
    var length = tap_tracker.length; 

    if ( tap_tracker.length > 1 ) {
      curr = tap_tracker[ length - 1 ] 
      prev = tap_tracker[ length - 2 ]
    }
    console.log("prev ", prev, "  curr ", curr)
    
    $(this).on("tapone", function(e) {

      if (prev.constructor === String 
        && curr.constructor === String 
        && prev === curr) {
          prev = 0; 
          curr = 0; 
          tap_tracker = []; 
        // change the page here  
      }   
    })
  });

 // }
 
  // 
  // this.hover ( function () {
  // 
  //   type_container      = $(this).find(".type"); 
  //   name_container      = $(this).find(".name");
  //   // swipe_icon      = $(this).find(".swipe"); 
  // 
  //   var $this = $(this); 
  // 
  //   $this.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
  //   TweenLite.to( $this, 1, { top: "-20px"} ); 
  // 
  //   
  //   if ( mobile ) 
  //   name_container.transition({ opacity: 0.07, "font-size" : "120px" }, show_others(0.8)); 
  //   else
  //   TweenLite.to( name_container, 1, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8) } );
  //   
  // $(this).on("tapone", function() {
  //       alert("tap")
  //     var page_tag = $(this).attr("tag"); 
  //     var page = _project_pages.findTag( page_tag ); 
  //     page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page(); 
  //     TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px",  ease: "SlowMo.easeIn", delay: 1 }); 
  //     new TimelineLite().to( [ $("#contact"), $("#resume") ], 2, { width: "60px", height: "68px", delay: 2 }); 
  //     TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );
  // 
  //     if ( mobile )
  //     $(this).find(".name").transition({ opacity: 1, "font-size" : "80px" }, callback(this)); 
  //     else
  //     TweenLite.to( $(this).find(".name") , 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this)} );
  // })
  //   
  // }, function () {
  // 
  //   if ( mobile )
  //   name_container.transition({ opacity: 1, "font-size" : "80px" }, callback(this)); 
  //   else
  //   TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this) } );
  // 
  // }); 
  // 




  if (mobile === 20) {
    $(this).on("click", function() {
      var page_tag = $(this).attr("tag")
      var page = _project_pages.findTag( page_tag ); 
      page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page(); 
      TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px",  ease: "SlowMo.easeIn", delay: 1 }); 
      new TimelineLite().to( [ $("#contact"), $("#resume") ], 2, { width: "60px", height: "68px", delay: 2 }); 
      TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );

      if ( mobile )
      $(this).find(".name").transition({ opacity: 1, "font-size" : "80px" }, callback(this)); 
      else
      TweenLite.to( $(this).find(".name") , 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this)} );
    })
  }


  function callback(t) {
    show_others( 0 ); 
    TweenLite.to( t, 2, { top: "0", ease: "Bounce.easeOut" } ); 
    $(t).animate({ borderWidth: "2px", borderColor: "#918E8C" }, 2000, "easeOutCirc"); 
  }
  function show_others( o ) {
    var timeline = new TimelineLite();  
    timeline.to( [type_container  ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#4ad6de"  } ); 
  }                                                                                                                                                                                                                                                                                                                                                                  
}



// toggle menu widget / function 
$.fn.toggle_menu = function () {
  var resume = $("#resume"); 
  var contact = $("#contact"); 
  $(this).on("click", function () {
    var $this = $(this); 

    $this.toggleClass("open"); 
    var timeline = new TimelineLite();  

    if ( $this.hasClass("open") ) {

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-30px", ease: "Bounce.easeOut" } ); 

      timeline.to( [resume, contact ], 1, {  marginLeft: 0, ease: "Power.easeInOut",  onComplete: rotate45($this, true)  });
      timeline.to( [resume, contact ], 0.5, { opacity: 1, delay: 0.1 }); 
    }
    else {
      $this.find("h1").removeClass("rotate");
      timeline.to( [resume, contact ], 1, { opacity: 0 }); 
      timeline.to( [resume, contact ], 2, {  marginLeft: "-500px", ease: "Power.easeInOut",  onComplete: rotate45($this, false)  });

      if ( $this.hasClass("vertical") )
      TweenMax.to( $(this), 1, { top: "-140px", ease: "Bounce.easeOut" } ); 
    }

  } ); 

}; 



