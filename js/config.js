(function(window, $) {
  const Ajax = {};
  const _ajaxType = [
    "get",
    "POST",
    "put",
    "delete",
    "options",
    "head",
    "connect",
    "trace"
  ];
  const _ajaxDataType = ["json", "xml", "html", "script"];
  const _ajaxContentType = [
    "application/json",
    "application/x-www-form-urlencoded"
  ];
  /**
   * 接口地址
   * @type {string}
   */
  Ajax.url = "http://huahui.booksnippetshub.com:8080";
  /**
   * Ajax Get请求
   * @param config Ajax需要参数
   * @param callback ajax结束回掉函数
   */
  Ajax.get = function(config, callback) {
    config.type = _ajaxType[0];
    _ajax(config, callback);
  };
  /**
   * Ajax Post请求
   * @param config Ajax需要参数
   * @param callback ajax结束回掉函数
   */
  Ajax.post = function(config, callback) {
    config.type = _ajaxType[1];
    _ajax(config, callback);
  };
  /**
   * Ajax Get请求数据格式是JSON
   * @param config Ajax需要参数可只配URL
   * @param callback ajax结束回掉函数
   */
  Ajax.get_json = function(config, callback) {
    config.type = _ajaxType[0];
    config.dataType = _ajaxDataType[0];
    _ajax(config, callback);
  };
  /**
   * 文件上传Ajax
   * @param config ajax配置项
   * @param callback 回调函数
   */
  Ajax.upload_file = function(config, callback) {
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    config.cache = false;
    config.contentType = false;
    config.processData = false;
    _ajax(config, callback);
  };
  /**
   * 根据dom元素上传文件
   * @param config
   * @param callback  回掉函数
   * @constructor  elem 文件dom id or class
   */
  Ajax.Upload_File_Elem = function(config, callback) {
    const file = $(config.elem).get(0).files[0];
    const fileData = new FormData();
    fileData.append("file", file);
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    config.cache = false;
    config.contentType = false;
    config.processData = false;
    config.data = fileData;
    _ajax(config, callback);
  };
  /**
   * 添加品牌
   * 根据dom元素上传文件
   * @param config
   * @param callback
   */
  Ajax.add_user = function(config, callback) {
    const file = $(config.elem).get(0).files[0];
    const fileName = $(config.elem).get(0).files[0].name;
    console.log(file);
    console.log(fileName);
    const fileData = new FormData();
    fileData.append("brandname", config.fdata.brandname);
    fileData.append("brandpasswd", config.fdata.brandpasswd);
    fileData.append("repeatbrandpasswd", config.fdata.repeatbrandpasswd);
    fileData.append("description", config.fdata.description);
    fileData.append("img", file, fileName);
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    config.cache = false;
    config.contentType = false;
    config.processData = false;
    config.data = fileData;
    _ajax(config, callback);
  };
  /**
   * 修改背景
   * 根据dom元素上传文件
   * @param config
   * @param callback
   */
  Ajax.add_bg = function(config, callback) {
    const file = $(config.elem).get(0).files[0];
    const fileName = $(config.elem).get(0).files[0].name;
    const fileData = new FormData();
    fileData.append("img", file, fileName);
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    config.cache = false;
    config.contentType = false;
    config.processData = false;
    config.data = fileData;
    _ajax(config, callback);
  };
  /**
   * Ajax post请求数据格式是JSON，接口使用@RequestParam时使用，使用form表单提交方式
   * @param config Ajax需要参数可只配URL
   * @param callback ajax结束回掉函数
   */
  Ajax.post_form_json = function(config, callback) {
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    if (!config.contentType) {
      config.contentType = _ajaxContentType[1];
    }
    _ajax(config, callback);
  };
  /**
   * Ajax post请求数据格式是JSON
   * 接口使用@RequestBody时使用自动添加contentType以及格式化参数
   * @param config Ajax需要参数可只配URL
   * @param callback ajax结束回掉函数
   */
  Ajax.post_json = function(config, callback) {
    config.type = _ajaxType[1];
    config.dataType = _ajaxDataType[0];
    if (!config.contentType) {
      config.contentType = _ajaxContentType[0];
    }
    if (config.contentType === "application/json") {
      config.data = JSON.stringify(config.data);
    }
    _ajax(config, callback);
  };

  function _ajax(config, callback) {
    // console.log(config);
    $.ajax({
      url: `${Ajax.url}/${config.url}`,
      type: config.type,
      data: config.data,
      dataType: config.dataType,
      contentType: config.contentType,
      timeout: config.timeout,
      async: config.async,
      cache: config.cache,
      processData: config.processData,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      beforeSend: function() {
        // $("#loading").show();
        //todo 此处可以写加载中动画……
      },
      success: function(_resultData) {
        //   _resultData.success默认后台请求之后返回success属性，代表请求成功
        // 现在的后台返回的是msg属性
        if (_resultData.msg === "成功" || config.mustCallback) {
          callback && typeof callback === "function" && callback(_resultData);
        } else {
          console.log(_resultData);
          callback(_resultData);
          // todo 这里可以做登录超时，错误提示……等处理
        }
      },
      error: function(XMLHttpRequest) {
        _handleStatus(XMLHttpRequest.status);
      },
      complete: function() {
        // $("#loading").hide();
        // todo 关闭动画处理……
      }
    });
  }

  function _handleStatus(status) {
    switch (status) {
      case 404:
        console.log("请求资源不存在：#" + status);
        break;
      case 400:
        console.log("请求参数有误：#" + status);
        break;
      case 500:
        console.log("服务器异常：#" + status);
        break;
      case 504:
        console.log("请求超时：#" + status);
        break;
      default:
        console.log("未知故障：#" + status);
        break;
    }
  }

  /**
   * base64 转 blob
   * @param dataurl   base64地址
   * @returns {Blob}
   */
  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  /**
   * base64 转 file
   * @param dataurl base64地址
   * @param filename  文件名
   * @returns {File}
   */
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  window.Ajax = Ajax;
})(window, jQuery);
// API
/*
    文件上传
    var file = $("#upImgFile").get(0).files[0];
    var fileData = new FormData();
    fileData.append("upImg", file);
*/


//设置cookie
function setCookie(c_name,value,expiredays)
{
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
      ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

//取回cookie
function getCookie(c_name)
{
  if (document.cookie.length>0)
  {
    c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
}

/*
设置cookie，有效期为365天
setCookie('username','123',365);

取回，若cookie失效，将返回空
getCookie('username');
 */
