$(document).ready(function() {
  console.log("onready");

  //对select选择正确的选项
  var href = window.location.href;
  if (href.indexOf("beauticiantable") >= 0) {
    $("#pagelist").val("美容师分析表");
  }else if (href.indexOf("project") >= 0) {
    $("#pagelist").val("项目分析表");
  }else if (href.indexOf("management") >= 0) {
    $("#pagelist").val("经营分析表");
  }else if (href.indexOf("beautician") >= 0) {
    $("#pagelist").val("技师分析表");
  }else if (href.indexOf("customerflow") >= 0) {
    $("#pagelist").val("客流分析表");
  }else if (href.indexOf("custpay") >= 0) {
    $("#pagelist").val("顾客消费动态");
  }else if (href.indexOf("company") >= 0) {
    $("#pagelist").val("本公司数据");
  }else if (href.indexOf("consultant") >= 0) {
    $("#pagelist").val("顾问分析表");
  }

  $("#pagelist").on("change", function() {
    var pagetitle = $("#pagelist").val();
    switch (pagetitle) {
      case "美容师分析表":
        window.location.href = "../beauticiantable.html";
        break;
      case "项目分析表":
        window.location.href = "../project.html";
        break;
      case "经营分析表":
        window.location.href = "../management.html";
        break;
      case "技师分析表":
        window.location.href = "../beautician.html";
        break;
      case "客流分析表":
        window.location.href = "./customerflow.html";
        break;
      case "顾客消费动态":
        window.location.href = "../custpay.html";
        break;
      case "本公司数据":
        window.location.href = "../company.html";
        break;
      case "顾问分析表":
        window.location.href = "../consultant.html";
        break;
      default:
    }
  });
});
