// Pages API
var Mixin = function() {};
Mixin.prototype = {
  serialize: function() {
    var output = [];
    console.log("supposed to output ", this); 
    for(key in this) {
      output.push(key + ': ' + this[key]);
    }
    return output.join(', ');
  }
};

var m = new Mixin; 
m.serialize(); 


var Page = function(title, img_src, images, content) {
  this.title = title; 
  this.img_src = img_src; 
  this.images = images; 
  this.content = content; 
  this.in_transition = ""; 
  this.out_transition = ""; 
  this.page_delay = 900; 
  this.entering = true; 
  this.leaving = false; 
  this.current_page = ""; 
  this.container = $("#content"); 
  console.log(this.container); 

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
    
    find : function(page) {
      for ( i in this ) {
        if ( i.title === page ) {
          return i; 
        }
      }
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


// var Site = (function() {
  //   var pages = {}; 
  // 
  //   return {
    //     createPage: function(title, img_src, images, content) {
      //       // Check to see if this particular combination has been created before.
      //       if( createPage[title] ) {
        //         return createPage[title];
        //       }
        //       // Otherwise create a new instance and save it.
        //       else {
          //         var page = new Page(title, img_src, images, content);
          //         createPage[title] = page;
          //         return page;
          //       }
          //     }
          //   };
          //   })(); 