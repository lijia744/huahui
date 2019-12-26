var year = new Date().getFullYear();
var day = new Date().getDate();
var month = new Date().getMonth();
var hour = new Date().getHours();
var minute = new Date().getMinutes();

console.log(year + " " + day + " " + month);

laydate.render({
  elem: "#test-n1", //渲染的标签id名
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-n2", //渲染的标签id名
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test14",
  type: "time",
  format: "H:M",
  value: hour + ":" + minute
});
laydate.render({
  elem: "#test-n5", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-n6", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-n9", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-n8", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d1", //渲染的标签id名
  format: "yyyy-MM-dd",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-d2", //渲染的标签id名
  format: "yyyy-MM-dd",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-d3", //渲染的标签id名
  format: "yyyy-MM-dd",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-d4", //渲染的标签id名
  format: "yyyy-MM-dd",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    (day < 10 ? "0" + day : day) //设置默认时间
});
laydate.render({
  elem: "#test-d5", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d6", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d7", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d8", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d9", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-d10", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-e1", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-e2", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-e3", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-e4", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
laydate.render({
  elem: "#test-e5", //渲染的标签id名
  format: "yyyy年MM月dd日",
  showBottom: false,
  // theme: "#3ce4a9",
  value:
    year +
    "年" +
    (month < 10 ? "0" + month : month) +
    "月" +
    (day < 10 ? "0" + day : day) +
    "日" //设置默认时间
});
