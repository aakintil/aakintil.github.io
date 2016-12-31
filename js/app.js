$(document).ready(function () {
     console.log("ready");
     $('body').countdown("2017/29/01", function (event) {
          $(".days").text(event.strftime('%-n'));
          $(".hrs").text(event.strftime('%-H'));
          $(".mins").text(event.strftime('%M'));
          //          event.strftime('%W weeks %-d days %-H h %M min %S sec');
     });
     var overlay = $("#animation")
          , content = $(".container-fluid");

     function hideOverlay() {
          setTimeout(function () {
               overlay.addClass("animated fadeOut");
               animateText();
          }, 550)
     };

     function animateText() {
          content.addClass("fadeInUp");
          setTimeout(function () {
               modifyOverlayCSS();
          }, 550 );
     }

     function modifyOverlayCSS() {
          overlay.css({
               "z-index": 0
               , "display": "none"
          })
     }
     hideOverlay();
})