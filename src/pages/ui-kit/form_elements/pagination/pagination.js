import "paginationjs";

$(".pagination__box").pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7],
  pageSize: 1,
  showGoInput: true,
  showGoButton: true,
  callback: function(data, pagination) {
    // template method of yourself
    var html = template(data);
    dataContainer.html(html);
  }
});
// $(".pagination__box").pagination({
//   dataSource: [1, 2, 3, 4, 5, 6, 7, 195],
//   callback: function(data, pagination) {
//     // template method of yourself
//     var html = template(data);
//     $(".pagination__data").html(html);
//   }
// });
