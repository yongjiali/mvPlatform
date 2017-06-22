window.onload = function() {
	n = a = i =0;
	m = 1;

	var timeWidth = setInterval('checkWidth()', 1000);

	document.getElementById('demo1').onmouseover = function() {
		n = 0;
	};
	document.getElementById('demo2').onmouseover = function(){
		n = 1;
	};
	document.getElementById('demo3').onmouseover = function(){
		n = 2;
	};
	document.getElementById('demo4').onmouseover = function(){
		n = 3;
	};

	var demoBut1 = document.getElementsByClassName('demoBut1');
	for (var i = 0; i < demoBut1.length; i++) {
		demoBut1[i].onmouseover = function() {
			clearDemo(m);
			m = 1;
			changeDemoBody(m);
		};
	};

	var demoBut2 = document.getElementsByClassName('demoBut2');
	for (var i = 0; i < demoBut2.length; i++) {
		demoBut2[i].onmouseover = function() {
			clearDemo(m);
			m = 2;
			changeDemoBody(m);
		};
	};

	var demoBut3 = document.getElementsByClassName('demoBut3');
	for (var i = 0; i < demoBut3.length; i++) {
		demoBut3[i].onmouseover = function() {
			clearDemo(m);
			m = 3;
			changeDemoBody(m);
		};
	};

	var demoBut4 = document.getElementsByClassName('demoBut4');
	for (var i = 0; i < demoBut4.length; i++) {
		demoBut4[i].onmouseover = function() {
			clearDemo(m);
			m = 4;
			changeDemoBody(m);
		};
	};

	var demoBut5 = document.getElementsByClassName('demoBut5');
	for (var i = 0; i < demoBut5.length; i++) {
		demoBut5[i].onmouseover = function() {
			clearDemo(m);
			m = 5;
			changeDemoBody(m);
		};
	};
	
	var onBigVideos = document.getElementsByClassName('onBigVideo');
	for (var i = 0; i < onBigVideos.length; i++) {
		onBigVideos[i].onmouseover = function() {
			this.firstChild.style.visibility = "visible";
		};
		onBigVideos[i].onmouseout = function() {
			this.firstChild.style.visibility = "hidden";
		};
	};
	
	var onSmallVideos = document.getElementsByClassName('onSmallVideo');
	for (var i = 0; i < onSmallVideos.length; i++) {
		onSmallVideos[i].onmouseover = function() {
			this.firstChild.style.visibility = "visible";
		};
		onSmallVideos[i].onmouseout = function() {
			this.firstChild.style.visibility = "hidden";
		};
	};
}

function clearDemo(x) {
	var j = n-1;
	document.getElementsByClassName('demoBut1')[n].style.color = "#51575d";
	document.getElementsByClassName('demoBut1')[n].style.borderBottom = "none";
	document.getElementsByClassName('demoBody1')[n].style.visibility = "hidden";
	document.getElementsByClassName('demoBut2')[n].style.color = "#51575d";
	document.getElementsByClassName('demoBut2')[n].style.borderBottom = "none";
	document.getElementsByClassName('demoBody2')[n].style.visibility = "hidden";
	document.getElementsByClassName('demoBut3')[n].style.color = "#51575d";
	document.getElementsByClassName('demoBut3')[n].style.borderBottom = "none";
	document.getElementsByClassName('demoBody3')[n].style.visibility = "hidden";
	document.getElementsByClassName('demoBut4')[n].style.color = "#51575d";
	document.getElementsByClassName('demoBut4')[n].style.borderBottom = "none";
	document.getElementsByClassName('demoBody4')[n].style.visibility = "hidden";
	if (x == 5) {
	document.getElementsByClassName('demoBut5')[j].style.color = "#51575d";
	document.getElementsByClassName('demoBut5')[j].style.borderBottom = "none";
	document.getElementsByClassName('demoBody5')[j].style.visibility = "hidden";};
}

function changeDemoBody(x) {
	var j = n;
	if (x == 5) {n = 0};
	document.getElementsByClassName('demoBut' + x)[n].style.color = "#4570ea";
	document.getElementsByClassName('demoBut' + x)[n].style.borderBottom = "3px solid #4570ea";
	document.getElementsByClassName('demoBody' + x)[n].style.visibility = "visible";
	n = j;
}

function checkWidth() {
	var videoList = document.getElementsByClassName('videoList');
	var OldWidth = Owidth;
	var Owidth = document.documentElement.clientWidth;
	if(OldWidth != Owidth) {
		if(Owidth < 1210) {
			document.getElementById('demo1').style.width = "1000px";
			document.getElementById('demo2').style.width = "1000px";
			document.getElementById('demo3').style.width = "1000px";
			document.getElementById('demo4').style.width = "1000px";
			for (var i = 0; i < videoList.length; i++) {
				videoList[i].style.width = "618px";
			}
		};
		if(Owidth >= 1210) {
			document.getElementById('demo1').style.width = "1210px";
			document.getElementById('demo2').style.width = "1210px";
			document.getElementById('demo3').style.width = "1210px";
			document.getElementById('demo4').style.width = "1210px";
			for (var i = 0; i < videoList.length; i++) {
				videoList[i].style.width = "828px";
			}
		};}
	}

