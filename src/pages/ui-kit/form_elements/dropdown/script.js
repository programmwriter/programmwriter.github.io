document.addEventListener("DOMContentLoaded", () => {
  const ddArrowAll = document.querySelectorAll(".dropdown__arrowBox");
  let ddItemObj = {};

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
      //togo сделать отдельный объект по id дропдауна
      const ddItemList = ddList.querySelectorAll(".dropdown__item");
      ddItemList.forEach(element => {
        const ddItemText = element.querySelector(".dropdown__text").innerText;
        const ddItemValue =
          element.querySelector(".dropdown__value").innerText * 1;
        ddItemObj[ddItemText] = ddItemValue;
      });
    });
  });
  //*********************************************************************** */
  //обработчик нажатия кнопок - в списке
  const ddBtnMinus = document.querySelectorAll(".dropdown__btnMinus");
  ddBtnMinus.forEach(element => {
    element.addEventListener("click", evt => {
      const ddItemBtnText = evt.target.parentNode.previousSibling.innerText;
      ddItemObj[ddItemBtnText]--;

      // клас актив кнопке минус и удаляем атрибут disabled
      if (ddItemObj[ddItemBtnText] === 0) {
        evt.target.classList.remove("ddBtn_active");
        evt.target.setAttribute("disabled", "disabled");
      }
      //изменение значения при уменьшении количесвта
      evt.target.nextSibling.innerText = String(ddItemObj[ddItemBtnText]);

      //изменение состояния инпута при уменьшении количества постояльцев
      evt.target.parentNode.parentNode.parentNode.previousSibling.firstChild.nextSibling.innerText = ddString(
        ddItemObj
      );
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

      //изменение значения при увеличении количесвта
      evt.target.previousSibling.innerText = String(ddItemObj[ddItemBtnText]);

      //изменение состояния инпута при увеличении количества постояльцев
      evt.target.parentNode.parentNode.parentNode.previousSibling.firstChild.nextSibling.innerText = ddString(
        ddItemObj
      );
    });
  });
});

//создание строки из нескольких
function ddString(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(
      ` ${obj[key]} ${num2str(obj[key], ["Ребенок", "Ребенка", "Детей"])}`
    );
  }
  return arr.join();
}
// function ddString(obj) {
//   let arr = [];
//   for (let key in obj) {
//     arr.push(` ${obj[key]} ${key}`);
//   }
//   return arr.join();
// }
function num2str(n, text_forms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;

  if (n > 10 && n < 20) {
    return text_forms[2];
  }

  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }

  if (n1 == 1) {
    return text_forms[0];
  }

  return text_forms[2];
}
