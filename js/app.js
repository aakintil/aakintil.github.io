$(document).ready(function () {

     var content = $(".container-fluid .row"),
          img = $("img");

     function animateText() {
          content.addClass("fadeInUp");
          img.addClass("fadeInUp");
     }

     setTimeout(function () {
          animateText();
     }, 750)
})