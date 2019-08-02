$(document).ready(function() {
  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15000,
      classes: {
        "ui-slider": "track",
        "ui-slider-handle": "handle"
      },
      values: [5000, 10000],
      slide: function(event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });

    $("#slider-range").slider("option", "classes.ui-corner-all", null);
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });
});
