document.addEventListener("DOMContentLoaded", () => {
  const ddArrowAll = document.querySelectorAll(".dropdown__arrowBox");

  //обработчик появления списка
  ddArrowAll.forEach(function(element) {
    element.addEventListener("click", () => {
      const ddList = element.parentNode.nextSibling;
      const ddInput = element.parentNode;
      if (ddList.style.display === "block") {
        ddList.style.display = "none";
        ddInput.className = "dropdown__input";
      } else {
        ddList.style.display = "block";
        ddInput.className = "dropdown__input_clicked";
      }
    });
  });

  //обработчик нажатия кнопок + - в списке
  // let opt = {};
});
