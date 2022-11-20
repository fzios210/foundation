function changemenu() {
  //通过父元素li，找到兄弟元素ul
  var bList = this.parentNode.getElementsByTagName("ul")[0];
  //CSS交替更换来实现显、隐
  if (bList.className == "myHide")
    bList.className = "myShow";
  else
    bList.className = "myHide";
}
window.onload = function () {
  var oList = document.getElementById("listUL");
  var nList = oList.childNodes; //子元素
  var sList;
  for (var i = 0; i < nList.length; i++) {
    //如果子元素为li，且这个li有子菜单ul
    if (nList[i].tagName == "LI" && nList[i].getElementsByTagName("ul").length) {
      slist = nList[i].firstChild; //找到超链接
      slist.onclick = changemenu; //动态添加点击函数
    }
  }
}