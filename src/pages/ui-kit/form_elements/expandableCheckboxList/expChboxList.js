$(document).ready(function() {
  //Находим второй по счету чекбокс
  const secondChk = $(".expChboxList__content:eq(1)");
  //делаем его видимым
  secondChk.addClass("show");
  //делаем галочки активными
  secondChk.find("input:eq(1)").attr("checked", true);
  secondChk.find("input:eq(2)").attr("checked", true);
  secondChk.find("input:eq(3)").attr("checked", true);

  //Функция выпадания чекбоксов при нажатии
  $(".expChboxList__title").click(function() {
    $(this)
      .toggleClass("rotate")
      .next()
      .toggleClass("show");
  });
});
