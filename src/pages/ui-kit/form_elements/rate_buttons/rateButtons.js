$(document).ready(function() {
  $(".rateButtons")
    .find(".rateButtons__box")
    .children()
    .on("click", function() {
      $(this).attr("src", "src/misc/images/rate-star_active.svg");
      $(this)
        .prevAll()
        .attr("src", "src/misc/images/rate-star_active.svg");

      $(this)
        .nextAll()
        .attr("src", "src/misc/images/rate-star_deactive.svg");
    });
});
