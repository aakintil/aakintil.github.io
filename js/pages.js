// Pages API

var Pages = function(num_of_pages) {
  this.num_of_pages = num_of_pages; 
  this.index = 0; 
  this.children = {};

}

Pages.prototype = {

  add : function( name, obj ) {
    if ( this.findTitle( obj.title ) ) {
      
    }
    else {
      this.children[ name ] = obj; 
    }
  },

  findTag : function( page_tag ) {
    for ( i in this.children ) {
      var obj = this.children[i]; 
      console.log( obj.tag, "    ",  page_tag )
      if ( obj.tag.toLowerCase() === page_tag.toLowerCase() ) {
        return obj; 
      }
    }
    return "none"
  },

  findTitle : function( page_title ) {
    for ( i in this.children ) {
      var obj = this.children[i]; 
      if ( obj.title === page_title ) {
        return obj; 
      }
    }
  }

}

// original 
// var Page = function(title, tag, img_src, images, content) {
  
var Page = function(title, tag, content) {

  this.title = title; 
  this.tag = tag; 
  // this.img_src = img_src; 
  // this.images = images; 
  this.content = content; 
  this.in_transition = ""; 
  this.out_transition = ""; 
  this.page_delay = 900; 
  this.entering = true; 
  this.leaving = false; 
  this.current_page = ""; 
  this.container = $("#content"); 
  this.element = $("<div></div>"); 
  this.element.html(this.content); 


  // think about attaching events if you want to have different experience on mobile
  // var that = this; // Correcting the scope.
  // addEvent(this.target, 'mouseover', function(e) { that.startDelay(e); });
  // addEvent(this.target, 'mouseout', function(e) { that.hide(); });
}; 


Page.prototype = {

  transitionIn : function(page) {
    this.entering = true; 
    this.leaving = false; 
    var page_delay = this.page_delay; 
    var container = this.container;
    this.element.attr( "class", this.in_transition ); 
    var element = this.element;  
    this.current_page = page; 
    setTimeout(function () {  container.html( element );   }, page_delay );
  }, 

  transitionOut : function(page) {
    this.leaving = true; 
    this.entering = false; 

    this.element.attr( "class", this.out_transition );
  }, 

  loadPage : function( page ) {
    var page = this.element; 
    var that = this; 

    var switchPages = function( that ) {
      this.transitionOut( this.current_page ); 
      // this.transitionIn( page ); 
      this.current_page = page;
    }

    // if there is currently NO custom page visible
    // just transition in...
    // else add an out transition to the current page and 
    // then transition in with the target page. 
    this.current_page === "" ? this.transitionIn( page ) : switchPages( page ) ; 

  }
}

