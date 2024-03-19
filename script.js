setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 3000);

$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});

$(".about ,.ourservices ,.news ,.company-wrap ,.contact").on(
  "inview",
  function (event, isInView) {
    if (isInView) {
      $(this).addClass("active");
    }
  }
);
