$(document).ready(function () {
    var role = getCookie("role");
    var userid = getCookie("userid");
    var username = getCookie("username");
    var userid = getCookie("userid");


    //渲染用户名，id和时候显示切换店铺按钮
    $("#username").text(username);
    $("#userid").text("ID: " + userid);
    if (role=="shop"){
        $("#changeshopbtn").hide()
    }



});