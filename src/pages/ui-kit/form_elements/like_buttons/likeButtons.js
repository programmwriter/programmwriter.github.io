$(document).ready(function() {
  $(".likeButtons__item").on("click", function() {
    $(this).toggleClass("likeButtons__item_active");
    if ($(this).hasClass("likeButtons__item_active")) {
      $(this)
        .find(".likeButtons__heart")
        .attr("src", "src/misc/images/like-heart_color.svg");

      $(this)
        .find(".likeButtons__number")
        .text(function(item, index) {
          return Number($(this).text()) + 1;
        })
        .addClass("likeButtons__number_color");
    } else {
      $(this)
        .find(".likeButtons__heart")
        .attr("src", "src/misc/images/like-heart.svg");

      $(this)
        .find(".likeButtons__number")
        .text(function(item, index) {
          return Number($(this).text()) - 1;
        })
        .removeClass("likeButtons__number_color");
    }
  });
});
