$(document).ready(function() {
  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15000,
      step: 5000,
      classes: {
        "ui-slider": "rangeSlider__track",
        "ui-slider-handle": "rangeSlider__handle",
        "ui-slider-range": "rangeSlider__range"
      },
      values: [5000, 10000],
      slide: function(event, ui) {
        $(".rangeSlider__amount").val(
          zero3(ui.values[0]) + "\u20bd - " + zero3(ui.values[1]) + "\u20bd"
        );
      }
    });
    $(".rangeSlider__amount").val(
      zero3($("#slider-range").slider("values", 0)) +
        "\u20bd - " +
        zero3($("#slider-range").slider("values", 1)) +
        "\u20bd"
    );
  });
});

//Функция zero3() получает число и преобразует его в строку разделяя тысячи пробелом
function zero3(val) {
  let strVal = String(val);
  return (
    strVal.substring(0, strVal.length - 3) +
    " " +
    strVal.substring(strVal.length - 3)
  );
}
