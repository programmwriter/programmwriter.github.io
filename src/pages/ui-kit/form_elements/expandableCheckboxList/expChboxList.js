$(document).ready(function() {
  $(".expChboxList__content:nth-child(2)").addClass("show"); //доработать
  $(".expChboxList__title").click(function() {
    $(this)
      .toggleClass("rotate")
      .next()
      .toggleClass("show");
  });
});
