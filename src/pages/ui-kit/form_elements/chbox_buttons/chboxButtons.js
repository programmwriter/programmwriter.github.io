$(document).ready(function() {
  //Находим второй по счету чекбокс
  const secondChk = $(".chboxButtons__content:eq(0)");
  //делаем галочки активными
  secondChk.find("input:eq(1)").attr("checked", true);
  secondChk.find("input:eq(2)").attr("checked", true);
});
