// animate childrend widget / function 
// move to another js file later
_count = 0;
$.fn.animate_children = function ( mobile ) {
  var view_more_container, type_container, name_container = "";  

  this.hover ( function () {
    type_container      = $(this).find(".type"); 
    name_container      = $(this).find(".name");
    swipe_icon      = $(this).find(".swipe"); 

    var $this = $(this); 

    $this.animate({ borderWidth: "2px", borderColor: "#4ad6de" }, 1000, "easeOutElastic"); 
    TweenLite.to( $this, 1, { top: "-20px"} ); 

    
    if ( mobile ) 
    name_container.transition({ opacity: 0.07, "font-size" : "120px" }, show_others(0.8)); 
    else
    TweenLite.to( name_container, 1, {  fontSize: "120px", opacity: 0.07, ease:Power2.easeInOut, onComplete: show_others(0.8) } );
    
  $(this).on("tapone", function() {
      var page_tag = $(this).attr("tag"); 
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
    
       //  
       // if (mobile) {
       //   // show swipe right icon
       //   $(this).swipe( {
       //     swipeLeft : function(event, target) {
       //       var page_tag = $(this).attr("tag"); 
       //       var page = _project_pages.findTag( page_tag ); 
       //       page !== undefined ? hide_index_page( $(this).parent(), page ) : show_page(); 
       //       TweenLite.to( $("#logo"), 2, { width: "100px", height: "100px",  ease: "SlowMo.easeIn", delay: 1 }); 
       //       new TimelineLite().to( [ $("#contact"), $("#resume") ], 2, { width: "60px", height: "68px", delay: 2 }); 
       //       TweenLite.to( $("#toggle-menu h1"), 2, { fontSize : "50px", ease: "SlowMo.easeIn", delay: 1 } );
       // 
       //       if ( mobile )
       //       $(this).find(".name").transition({ opacity: 1, "font-size" : "80px" }, callback(this)); 
       //       else
       //       TweenLite.to( $(this).find(".name") , 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this)} );
       //       }, threshold: 0
       //     })
       // 
       //   }
    
    
  }, function () {

    if ( mobile )
    name_container.transition({ opacity: 1, "font-size" : "80px" }, callback(this)); 
    else
    TweenLite.to( name_container, 1, {  fontSize: "80px", opacity: 1, ease: "Power2.easeInOut", onComplete: callback(this) } );

  }); 





  if (!mobile) {
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
    timeline.to( [type_container, swipe_icon  ], 1, {  opacity: o, ease: o === 0 ? "Power2.easeOut" : "Power1.easeIn", color: o === 0 ? "#918E8C" : "#4ad6de"  } ); 
  }                                                                                                                                                                                                                                                                                                                                                                  
}


$.fn.ignore_animation = function() {
  this.hover ( function () {
    // do nothing
  })
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



