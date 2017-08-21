$(".markets-list select").focus(function() {
  $(".markets-list label").addClass("markets-list--focus");
});

$(".markets-list select").focusout(function() {
  $(".markets-list label").removeClass("markets-list--focus");
  $(".markets-list label").removeClass("markets-list--click");
});

$(".markets-list select").click(function() {
  $(".markets-list label").toggleClass("markets-list--click");
});