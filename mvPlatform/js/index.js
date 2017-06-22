window.onload = function(){
	var qqMusic = document.getElementById("qqMusic");
	var pptv = document.getElementById("pptv");
	var fengyun= document.getElementById("fengyun");
	var musicPlatform = document.getElementById("musicPlatform");
	qqMusic.onclick = function(){
		window.open('qqMusic.html',  'newwindow', 'height=500, width=600, top=100,left=200, status=no,location=no,toolbar=no, menubar=no,scrollbars=no,resizable=no');
	}
	pptv.onclick = function(){
		window.open('PPTV.html',  'newwindow', 'height=500, width=600, top=100,left=200');
	}
	fengyun.onclick = function(){
		window.open('fengyun.html',  'newwindow', 'height=500, width=600, top=100,left=200');
	}
	musicPlatform.onclick = function(){
		window.open('musicPlatform.html',  'newwindow', 'height=500, width=600, top=100,left=200');
	}
	
}
