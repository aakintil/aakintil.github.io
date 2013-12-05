// 
// /*
//   elementTransitions.js
// */
// var PageTransitions = (function($) {
//   var startElement = 0,
//   animEndEventNames = {
//     'WebkitAnimation': 'webkitAnimationEnd',
//     'OAnimation': 'oAnimationEnd',
//     'msAnimation': 'MSAnimationEnd',
//     'animation': 'animationend'
//   }
// 
//   function getTransitionPrefix() {
//     var b = document.body || document.documentElement;
//     var s = b.style;
//     var p = 'animation';
//     if(typeof s[p] == 'string')
//       return 'animation';
// 
//     // Tests for vendor specific prop
//     v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
//     p = p.charAt(0).toUpperCase() + p.substr(1);
//     for( var i=0; i<v.length; i++ ) {
//       if(typeof s[v[i] + p] == 'string')
//         return v[i] + p;
//     }
//     return false;
//   }
//   // animation end event name
//   animEndEventName = animEndEventNames[getTransitionPrefix()];
// 
//   function init() {
//     $(".et-page").each(function() {
//       $(this).data('originalClassList', $(this).attr('class'));
//     });
//     $(".et-wrapper").each(function() {
//       $(this).data('current', 0);
//       $(this).data('isAnimating', false);
//       $(this).children(".et-page").eq(startElement).addClass('et-page-current');
//     });
// 
//     $(".et-rotate").click(function() {
//       animate($(this));
//     });
//   }
// 
//   function animate(block, callback) {
//     nextPage($(block).closest('.et-wrapper'), $(block).attr('et-out'), $(block).attr('et-in'), callback);
//   }
// 
//   function nextPage(block, outClass, inClass, callback) {
//     block = $(block);
//     inClass = formatClass(inClass);
//     outClass = formatClass(outClass);
//     var current = block.data('current'),
//         $pages = block.children('.et-page'),
//         pagesCount = $pages.length,
//         endCurrPage = false,
//         endNextPage = false;
// 
//     if(block.data('isAnimating')) {
//       return false;
//     }
// 
//     block.data('isAnimating', true);
// 
//     var $currPage = $pages.eq(current);
//     if(current < pagesCount - 1) {
//       current++;
//     }
//     else {
//       current = 0;
//     }
//     block.data('current', current);
// 
//     var $nextPage = $pages.eq(current).addClass('et-page-current');
// 
//     $currPage.addClass(outClass).on(animEndEventName, function() {
//       $currPage.off(animEndEventName);
//       endCurrPage = true;
//       if(endNextPage) {
//         if(jQuery.isFunction(callback)) {
//           callback(block, $nextPage, $currPage);
//         }
//         onEndAnimation($currPage, $nextPage, block);
//       }
//     });
// 
//     $nextPage.addClass(inClass).on(animEndEventName, function() {
//       $nextPage.off(animEndEventName);
//       endNextPage = true;
//       if(endCurrPage) {
//         onEndAnimation($currPage, $nextPage, block);
//       }
//     });
//   }
// 
//   function onEndAnimation($outpage, $inpage, block) {
//     resetPage($outpage, $inpage);
//     block.data('isAnimating', false);
//   }
// 
//   function resetPage($outpage, $inpage) {
//     $outpage.attr('class', $outpage.data( 'originalClassList'));
//     $inpage.attr('class', $inpage.data( 'originalClassList') + ' et-page-current');
//   }
// 
//   function formatClass(str) {
//     classes = str.split(" ");
//     output = "";
//     for(var n=0; n<classes.length; n++){
//       output += " pt-page-" + classes[n];
//     }
//     return output;
//   }
//   return {
//     init : init,
//     nextPage: nextPage,
//     animate: animate
//   };
// })(jQuery);
// 
// jQuery(function($) {
//   PageTransitions.init();
// });
// 
// 
// 
// 
// 
// // function Transition(el) {
// //   this.element = el; 
// //   console.log("transition created")
// //   // this.name = this.transitions[name] || "default"; 
// //   var trans = this; 
// //   var element = this.element; 
// // 
// //   for (i in this.events) {
// //     $(element).on(i, function(event) { trans.checkEvent(event, i) })
// //   }
// // }
// // 
// // Transition.prototype.checkEvent = function(event, name) {
// //   // this.events[name] === undefined ? console.log("cannot find") : this.events[name].action(this.element.parent());
// //   if (this.events[name] !== undefined) {
// //    
// //   }
// // }
// // 
// // 
// // Transition.prototype.transitions = {
// //   deflt: "default",
// //   highlight: "highlight", 
// //   grow: "grow"
// // }
// // 
// // Transition.prototype.events = {
// //   vmouseover: { input: "vmouseover", action: highlight }
// //   // vmouseout: {  input: "vmouseout", action: unhighlight }
// //   // mouseDown: "mousedown",   
// //   // mouseUp: "mouseup", 
// //   // click: "click",     
// //   // mouseMove: "mousemove",
// //   // mouseIn: "mouseover", 
// //   // mouseOut: "mouseout",   
// //   // keyPress: "keypress", 
// //   // timerTick30Ms: "timerTick30Ms"    
// // };
// // 
// // 
// // // transition functions
// // function highlight(element) {
// //   console.log("highlight called"); 
// //   // element.toggle(function() {
// //   //   element.css({ opacity: 0.4 }); 
// //   // })
// //   
// // 
// //   // $.when((element).css({ opacity: 0.4 })).done(function() { unhighlight(); }); 
// // }
// // 
// // function unhighlight(element) {
// //   console.log("unhighlight called"); 
// //   // element.css({opacity: 1}); 
// // 
// // }
// 
