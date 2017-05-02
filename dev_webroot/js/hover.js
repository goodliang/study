var oUL = document.getElementById("list")
var oLI = oUL.getElementsByTagName("li")
var len = oLI.length;
//var aSpan = null
for (var i = 0; i < len; i++) {
	oLI[i].onmouseover = function() {
		this.getElementsByTagName("span")[0].style.display = "block"
	}
	oLI[i].onmouseout = function() {
		this.getElementsByTagName("span")[0].style.display = "none"
	}
}