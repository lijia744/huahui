var oBtn = document.getElementById("btn");
var oBox = document.getElementById("box");
showallshoppopup = function (redirectu) {

    if (getCookie("role") == "shop") {
        window.location.href = "./beauticiantable.html";
        return;
    }
    getallshop()
    if (oBox.style.display == "none") {
        // 如果层是隐藏的
        oBox.style.display = "block";
    } else {
        // 如果层是显示的
        oBox.style.display = "none";
    }
};
if (oBtn!=null){
    oBtn.onclick = showallshoppopup
    oBox.onclick = function () {
        if (oBox.style.display == "block") {
            // 如果层是隐藏的
            oBox.style.display = "none";
        } else {
            // 如果层是显示的
            oBox.style.display = "block";
        }
    }
}




//brand设置shopid和username的cookies
function setshopidcookie(src, callbackfunc) {
    // console.log($(src).text())
    // console.log($(src).data("shopid"))

    setCookie("userid", $(src).data("shopid"))
    setCookie("username", $(src).text())
    eval(callbackfunc + "()")
}

function gotodetails() {
    window.location.href = "./beauticiantable.html";
}


//获得所有shop
function getallshop() {

    var shopidlist = $("#shopidlist");
    shopidlist.empty();
    var li = $(`<li style="text-align:center">加载中</li>`)
    shopidlist.append(li);

    Ajax.get(
        {
            url: `shop/allshop`,
        },
        res => {
            // console.log(res);
            if (res.code == 0) {
                var data = res.data;
                shopidlist.empty();

                for (let i = 0; i < data.length; i++) {
                    console.log(data[i])
                    var li = $(`<li onclick='setshopidcookie(this,"gotodetails")' data-shopid='${data[i].shopid}'>${data[i].shopname}</li>`)
                    shopidlist.append(li);
                }
            } else {
                alert(res.msg);
            }
        }
    );
}