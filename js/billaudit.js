
function getallexamine() {
    Ajax.get(
        {
            url: `m/allexamine`
        },
        res => {
            console.log(res);
            if (res.code == 0) {
                $("#unexaminelist").empty();
                $.each(res.data, function (index, item) {
                    $("#unexaminelist").append(`
                        <tr id="line" data-settlementid="${item.settlementid}" onclick="getonesettlement(${item.settlementid})">
                            <td style='width:1.2rem'>${item.customer}</td>
                            <td style='width:2.1rem'>${item.projectname}</td>
                            <td style='width:1.3rem'>${item.money}</td>
                            <td style='width:1.3rem'>${item.consumptionpattern}</td>
                            <td style='width:1.5rem'>${item.beauticianname}</td>
                        </tr>
                `)
                });
            }
        }
    );
}
window.onload = function () {



    getallexamine()


};
//审核通过1,未通过-1
function examinefunc(settlementid,passornot) {
    Ajax.post(
        {
            url: `settlement/examine`,
            data: {
                settlementid: settlementid,
                passornot:passornot
            }
        },
        res => {
            if (res.code==0){
                if (passornot==1){
                    alert("已审核通过");
                }else if (passornot==-1){
                    alert("已审核通过");
                }
                $(".detail").css("display", "none");

            }else {
                alert(res.msg);
            }
            getallexamine()
        }
    );

}


function setwindowexamineid(id) {
    $("#examinepass").attr("onclick", `examinefunc(${id},1)`);
    $("#examineunpass").attr("onclick", `examinefunc(${id},-1)`);
}

function getonesettlement(settlementid) {

    Ajax.get(
        {
            url: `settlement/selectone`,
            data: {
                settlementid: settlementid
            }
        },
        res => {
            console.log(res);
            var data = res["data"];
            $("#brandname").text(data["brandname"]);
            $("#consumptionpattern").text(data["brandname"]);
            $("#classify").text(data["classify"]);
            $("#projectname").text(data["projectname"]);
            $("#cardcategory").text(data["cardcategory"]);
            $("#checker").text(data["checker"]);
            $("#sonsultant").text(data["sonsultant"]);
            $("#beautician").text(data["beautician"]);
            $("#times").text(data["times"]);
            $("#money").text(data["money"]);
            $("#allocate").text(data["allocate"]);
            $("#consumptioncategory").text(data["consumptioncategory"]);
            $("#time").text(data["time"]);
            $("#category").text(data["category"]);
            $("#customer").text(data["customer"]);
            $("#hand").text(data["hand"]);
            setwindowexamineid(settlementid)
        }
    );
}