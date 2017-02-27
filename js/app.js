$(document).ready(function () {
     console.log("ready");
     var untilDate = new Date("2017/02/15");
     console.log(untilDate.toDateString())
     $('body').countdown("2017/03/28", function (event) {
          $(".days").html(event.strftime('%D'));
          $(".hrs").text(event.strftime('%H'));
          $(".mins").text(event.strftime('%M'));
          $(".secs").text(event.strftime('%S'));
          // event.strftime('%W weeks %-d days %-H h %M min %S sec');
     });
     var overlay = $("#animation")
          , content = $(".container-fluid .row");

     function hideOverlay() {
          setTimeout(function () {
               overlay.addClass("animated fadeOut");
               animateText();
          }, 350)
     };

     function animateText() {
          content.addClass("fadeInUp");
          setTimeout(function () {
               modifyOverlayCSS();
          }, 750);
     }

     function modifyOverlayCSS() {
          overlay.css({
               "z-index": 0
               , "display": "none"
          })
     }
     hideOverlay();
})