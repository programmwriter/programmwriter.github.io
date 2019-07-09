// console.log("privet vatrushki");
document.addEventListener("DOMContentLoaded", () => {
  const ddAll = document.querySelectorAll(".dropdown__input");

  console.log(ddAll);
  ddAll.forEach(function(element) {
    // console.log(element.innerHTML);
    element.addEventListener("click", evt => {
      const ddList = element.nextSibling;
      ddList.style.display === "block"
        ? (ddList.style.display = "none")
        : (ddList.style.display = "block");
    });
  });
  // dd.addEventListener("click", evt => {
  //   const ddList = document.querySelector(
  //     evt.target.classlist[0] + ".dropdown__list "
  //   );
  //   ddList.style.display === "block"
  //     ? (ddList.style.display = "none")
  //     : (ddList.style.display = "block");
  //   console.log(ddList.style.display);
  //   console.log(evt.target.classList[0]);
  // });
});
