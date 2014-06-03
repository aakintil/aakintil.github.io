var page = sessionStorage.myValue; 

var Pages = {
  nasa: {
    id: "nasa",
    title: "NASA", 
    content: get_content( page )
  }, 
  
  ar: {
    id: "apartment-reviews",
    title: "Apartment Reviews", 
    content: get_content( page )
  }

}

$(document).ready( function() {
  console.log("in the project page ", Pages[page].content)
})


function get_content( name ) {
  // contents.name; 
  return contents.name;  
}