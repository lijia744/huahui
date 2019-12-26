function hidechangeshopbtn() {
    $("#changeshopbtn").hide();
}

function displaychangeshopbtn() {
    $("#changeshopbtn").show();
}

$(document).ready(function () {


    //决定是否显示切换店铺
    Ajax.get(
        {
            url: `role`
        },
        res => {
            console.log(res);
            if (res == "null") {
                window.location.href = "./index.html";
            }
            if (res.toLowerCase().indexOf("shop")>=0) {
                $("#companydatabtn").hide();
                console.log("shop")
                setCookie("role","shop")
                hidechangeshopbtn();
            } else if (res.toLowerCase().indexOf("brand")>=0) {
                console.log("brand")
                setCookie("role","brand")
                $("#yingyetitle").text("今日所有店铺营业额")
                $("#geo").hide();
            }else if (res.toLowerCase().indexOf("staff")>=0){
                $("#reviewbtn").hide();
                $("#companydatabtn").hide();
                setCookie("role","brand")
                $("#geo").hide();
            }

        }
    );

    //显示名，id，位置
    Ajax.get(
        {
            url: `info`
        },
        res => {
            console.log(res);
            if (res.code!=0){

            }else {
                $("#username").text(res.data.username);
                $("#userid").text("ID: "+res.data.userid);
                $("#geotext").text(res.data.geo);//brand无

                setCookie("username",res.data.username)
                setCookie("userid",res.data.userid)
            }
        }
    );
    //显示今日营业额
    Ajax.get(
        {
            url: `m/todaydata`
        },
        res => {
            console.log(res);
            if (res.code==0){
                $("#人头").text(res.data.人头);
                $("#实操数").text(res.data.实操数);
                $("#客人单价").text(res.data.客人单价);
                $("#客流").text(res.data.客流);
                $("#现金").text(res.data.现金);
                $("#项目数").text(res.data.项目数);
            }
        }
    );


});