$(document).ready(function() {
  $("#change").click(function() {
    Ajax.post(
      {
        url: `login`,
        data: {
          value: ""
        }
      },
      res => {
        console.log(res);
        if (res.msg === "成功") {
          window.location.href = "../system.html";
        } else {
          alert(res.msg);
        }
      }
    );
  });
});
