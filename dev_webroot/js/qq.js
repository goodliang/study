

window.onload = function(){
	var oUl = document.getElementById("list")
	var oH2 = document.getElementsByTagName("h2")
	var oName = oUl.getElementsByTagName("ul")
	var arrLi = []
	for(var i = 0 ; i<oName.length; i++){
		var oLi = oName[i].getElementsByTagName("li")
		for (var j = 0 ; j<oLi.length; j++){
                arrLi.push(arrLi[j])
		}
	}

	for(var i = 0; i<arrLi.length; i++){
		alert(arrLi[i])
	}
	for (var i= 0 ; i<oH2.length; i++){
		oH2[i].index = i
		oH2[i].onclick = function (){
			for(var i = 0; i<oName.length; i ++){
				if(i!=this.index){
					oName[i].style.display = ""
				    oH2[i].className = ""
				}
				
			}
			if(this.className == ""){
				this.className = "active"
			    oName[this.index].style.display = "block"
			}else{
				this.className = ""
			    oName[this.index].style.display = "none"
			}
			
		}
		
	}
}