$(document).ready(function () {
     console.log("ready");
     $('body').countdown("2017/01/30", function (event) {
          $(".days").text(event.strftime('%-n'));
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