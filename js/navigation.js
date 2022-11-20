function changemenu() {
  var bList = this.parentNode.getElementsByTagName("ul")[0];
  if (bList.className == "myHide")
    bList.className = "myShow";
  else
    bList.className = "myHide";
}
window.onload = function () {
  var oList = document.getElementById("listUL");
  var nList = oList.childNodes; 
  var sList;
  for (var i = 0; i < nList.length; i++) {
    if (nList[i].tagName == "LI" && nList[i].getElementsByTagName("ul").length) {
      slist = nList[i].firstChild; 
      slist.onclick = changemenu; 
    }
  }
}