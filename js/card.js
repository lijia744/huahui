// == 值比较  === 类型比较 $(id) ---->  document.getElementById(id)
function $(id){
    return typeof id === 'string' ? document.getElementById(id):id;
}
 
// 当页面加载完毕
window.onload = function(){
    // 拿到所有的标题(li标签) 和 标题对应的内容(div)
    var titles = $('tab-header').getElementsByTagName('li');
    var headerLi=$('tab-header').getElementsByTagName('first')
    var divs = $('tab-content').getElementsByClassName('dom');
    // 判断
    if(titles.length != divs.length) return;
    // 遍历
    for(var i=0; i<titles.length; i++){
        // 取出li标签
        var li = titles[i];
        li.id = i;
//        console.log(li);
        // 监听鼠标的移动
        li.onclick = function(){
            for(var j=0; j<titles.length; j++){
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            this.className = 'active';
            divs[this.id].style.display = 'block';
            headerLi.className="selected"
        }
    }
 
}