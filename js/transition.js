function Transition(el) {
  this.element = el; 
  console.log("transition created")
  // this.name = this.transitions[name] || "default"; 
  var trans = this; 
  var element = this.element; 

  for (i in this.events) {
    $(element).on(i, function(event) { trans.checkEvent(event, i) })
  }
}

Transition.prototype.checkEvent = function(event, name) {
  // this.events[name] === undefined ? console.log("cannot find") : this.events[name].action(this.element.parent());
  if (this.events[name] !== undefined) {
   
  }
}


Transition.prototype.transitions = {
  deflt: "default",
  highlight: "highlight", 
  grow: "grow"
}

Transition.prototype.events = {
  vmouseover: { input: "vmouseover", action: highlight }
  // vmouseout: {  input: "vmouseout", action: unhighlight }
  // mouseDown: "mousedown",   
  // mouseUp: "mouseup", 
  // click: "click",     
  // mouseMove: "mousemove",
  // mouseIn: "mouseover", 
  // mouseOut: "mouseout",   
  // keyPress: "keypress", 
  // timerTick30Ms: "timerTick30Ms"    
};


// transition functions
function highlight(element) {
  console.log("highlight called"); 
  // element.toggle(function() {
  //   element.css({ opacity: 0.4 }); 
  // })
  

  // $.when((element).css({ opacity: 0.4 })).done(function() { unhighlight(); }); 
}

function unhighlight(element) {
  console.log("unhighlight called"); 
  // element.css({opacity: 1}); 

}

