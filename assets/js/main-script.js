$(document).ready(function() { //Document Ready function

//---------------- Navbar
var angle = 0;
var openSection = false;
$(".navbar-toggle").click(function() { //executes navbar visual transitions
  angle -= 90;
  $(this).css("transform", "rotate(" + angle + "deg)");
  $(this).children().toggleClass("toggle-active");
  $("#homeBackdrop-container").toggleClass("page-blur");
  $("ul").toggleClass("nav-hidden");
  deactivateAllSections();
});

  function deactivateAllSections() { //deactivateAllSections
    $("section").removeClass("section-active");
    $("#homeBackdrop-container").removeClass("img-shift-left");
  };

  function activateSection(tSection) { //activateSection
    $("#homeBackdrop-container").addClass("img-shift-left");
    if (openSection) {
      setTimeout(function() {
        $(tSection).addClass("section-active");
      }, 200);
    } else {
      $(tSection).addClass("section-active");
    }
  };

  $(".nav-link").click(function() { //navbar click management
    openSection = $("#bio").hasClass("section-active") ||
      $("#recordings").hasClass("section-active") ||
      $("#photos").hasClass("section-active");
    var target = "#" + $(this).attr("data-page-target");
    deactivateAllSections();
    activateSection(target);
  });

  function resizeiframe() { //Resize iframes for YouTube embeds
    let iframeWidth = $('iframe').width();
    $('iframe').css('height', iframeWidth / 1.6);
  };


});
