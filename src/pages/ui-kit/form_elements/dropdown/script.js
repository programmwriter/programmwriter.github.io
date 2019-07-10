document.addEventListener("DOMContentLoaded", () => {
  const ddArrowAll = document.querySelectorAll(".dropdown__arrowBox");
  let ddItemObj = {};
  let count = 0;
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

      //заполняем объект для данного дропдауна
      const ddItemList = ddList.querySelectorAll(".dropdown__item");
      ddItemList.forEach(element => {
        const ddItemText = element.querySelector(".dropdown__text").innerText;
        const ddItemValue =
          element.querySelector(".dropdown__value").innerText * 1;
        ddItemObj[ddItemText] = ddItemValue;
      });
      console.log(ddItemObj);
    });
  });
  //*********************************************************************** */
  //обработчик нажатия кнопок - в списке
  const ddBtnMinus = document.querySelectorAll(".dropdown__btnMinus");
  ddBtnMinus.forEach(element => {
    element.addEventListener("click", evt => {
      const ddItemBtnText = evt.target.parentNode.previousSibling.innerText;
      ddItemObj[ddItemBtnText]--;
      //удаляем клас актив кнопке минус и добавляем атрибут disabled
      if (ddItemObj[ddItemBtnText] === 0) {
        evt.target.classList.remove("ddBtn_active");
        evt.target.setAttribute("disabled", "disabled");
      }
      evt.target.nextSibling.innerText = String(ddItemObj[ddItemBtnText]);
      console.log(ddItemObj);
    });
  });
  //********************************************************************* */
  //обработчик нажатия кнопок + в списке
  const ddBtnPlus = document.querySelectorAll(".dropdown__btnPlus");
  ddBtnPlus.forEach(element => {
    element.addEventListener("click", evt => {
      const ddItemBtnText = evt.target.parentNode.previousSibling.innerText;
      ddItemObj[ddItemBtnText]++;
      //добавляем клас актив кнопке минус и удаляем атрибут disabled
      if (ddItemObj[ddItemBtnText] > 0) {
        evt.target.previousSibling.previousSibling.classList.add(
          "ddBtn_active"
        );
        evt.target.previousSibling.previousSibling.removeAttribute(
          "disabled",
          "disabled"
        );
      }
      evt.target.previousSibling.innerText = String(ddItemObj[ddItemBtnText]);
      console.log(ddItemObj);
    });
  });
  console.log(ddBtnMinus);
});
