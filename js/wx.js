	window.onload = function() {
		var oImg = document.getElementById("icon1");
		var oIconBox = document.getElementById("icon-box");
		var oInput = document.getElementById("input1");
		var oBtn = document.getElementById("btn1");
		var oText = document.getElementById("text-box");
		var oTab = true;

		oImg.onclick = function() {
			if (oTab) {
				oImg.src = "img/boy.png"
				oTab = false
			} else {
				oImg.src = "img/girl.png"
				oTab = true
			}
		}
		oBtn.onclick = function() {
			if (oInput.value !== '') {
				if (oTab) {
					oText.innerHTML = "<div class='boy-text'> " + "<span>" + oIconBox.innerHTML + "</span>" + "<p>" + oInput.value + "</p>" + "</div>"+oText.innerHTML
					oInput.value = ''
				} else {
					oText.innerHTML = "<div class='girl-text'> " + "<span>" + oIconBox.innerHTML + "</span>" + "<p>" + oInput.value + "</p>" + "</div>"+oText.innerHTML
					oInput.value = ''
				}
			}
		}
	}