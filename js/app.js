function Ck() {
	var checkBox = document.getElementById("dm");

	if (checkBox.checked == true) {
		document.body.style.backgroundColor = "#00171f";
		document.body.style.transform = "1s";
		document.getElementById("logo-img").src = "../imgs/logo-dark.svg";
	} else {
		document.body.style.backgroundColor = "#fff";
		document.getElementById("logo-img").src = "../imgs/logo.svg";
	}

	if (checkBox.checked == true) {
		document.getElementById("button").style.background =
			"url('https://i.pinimg.com/236x/cf/e6/17/cfe6176a35db2af958e8a9ad07eed532.jpg') no-repeat center center";
		document.getElementById("button").style.backgroundSize = "cover";
	} else {
		document.getElementById("button").style.background =
			"url('https://i.pinimg.com/564x/a5/5c/13/a55c132fec6ba35b063bc6d32c7cf7fb.jpg') no-repeat center center";
		document.getElementById("button").style.backgroundSize = "cover";
	}

}