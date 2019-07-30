$(document).ready(function() {
  //Поумолчанию включен первый radio button
  $(".radioButtons__input:eq(0)").attr("checked", true);

  //Выбираем все radio buttons
  const allRadio = $(".radioButtons__input");
  //Навешиваем событие на изменение radio button
  allRadio.on("change", function() {
    //перебираем все radio buttons и проверяем если checked то вешаем клас active
    allRadio.map(function() {
      $(this).prop("checked")
        ? $(this)
            .parent()
            .addClass("active")
        : $(this)
            .parent()
            .removeClass("active");
    });
  });
});
