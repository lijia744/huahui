var year = new Date().getFullYear();
var day = new Date().getDate();
var month = new Date().getMonth();

console.log(year + " " + day + " " + month);

// laydate.render({
//   showBottom: false,
//   // theme: "#3ce4a9",
//   elem: "#test-n1", //渲染的标签id名
//   value: month + "." + day //设置默认时间
// });
// laydate.render({
//   showBottom: false,
//   elem: "#test-n2", //渲染的标签id名
//   value: month + "." + day //设置默认时间
// });
laydate.render({
  elem: "#test-n3",
  // format: "MM.dd", //自定义日期显示样式
  showBottom: false,
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-n4",
  // format: "MM.dd", //自定义日期显示样式
  showBottom: false,
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
$(function() {
  $("#period").change(function() {
    if ($("#period").val() == "其他") {
      $(".dateInput").removeAttr("disabled");
    } else {
      $(".dateInput").attr("disabled", true);
    }
  });
});
// laydate.render({
//   elem: "#test-n5", //渲染的标签id名
//   format: 'yyyy年MM月dd日',
//   showBottom: false,
//   // theme: "#3ce4a9",
//   value:
//     year +
//     "年" +
//     (month < 10 ? "0" + month : month) +
//     "月" +
//     (day < 10 ? "0" + day : day) +"日"//设置默认时间
// });
// laydate.render({
//   elem: "#test-n6", //渲染的标签id名
//   format: 'yyyy年MM月dd日',
//   showBottom: false,
//   // theme: "#3ce4a9",
//   value:
//     year +
//     "年" +
//     (month < 10 ? "0" + month : month) +
//     "月" +
//     (day < 10 ? "0" + day : day) +"日"//设置默认时间
// });
// laydate.render({
//   elem: "#test-n7", //渲染的标签id名
//   format: 'yyyy.MM.dd',
//   showBottom: false,
//   // theme: "#3ce4a9",
//   value:
//     year +
//     "." +
//     (month < 10 ? "0" + month : month) +
//     "." +
//     (day < 10 ? "0" + day : day) //设置默认时间
// });
