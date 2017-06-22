
window.onload=function(){
	var btn1=document.getElementById("btn1");
	var btn2=document.getElementById("btn2");
	var al=document.getElementById("al");
				//	列表
	btn2.onclick=function (){
		al.style="transform:translateY(-400px)";
	}
	btn1.onclick=function(){
		al.style="transform:translateY(0)";
	}
				//	导航
	var onav=document.getElementById("onav");
	var leftBtn=document.getElementById("leftBtn");
	var rightBtn=document.getElementById("rightBtn");
	var i=0;
	var j=0;
	rightBtn.onclick=function(){
		if (i<=0&&i>=-1200) {	
			i=i-475;
			onav.style="transform:translateX("+i+"px);transition:1s";
//			onav.style="transition:2s";
		}
		j=i
	}
	leftBtn.onclick=function(){
		if (j<0) {
			j=j+475;
			onav.style="transform:translateX("+j+"px);transition: 1s";
//			onav.style="transition-duration: 5s";
		}		
		i=j;
	}
				//	宽屏
		var kp=document.getElementById("kp");
		var videoLeft=document.getElementById("videoLeft");
		var h=document.getElementById("h");
		var hh=document.getElementsByTagName("h1")[1];
		h.onclick=function(){
			videoLeft.className="aaa";
			var bbb=document.getElementById("bbb");
			bbb.style.display="none";
			hh.className="bz";
			h.style.display="none";
		}
		//标准
		hh.onclick=function(){
			videoLeft.className="left1";
			var bbb=document.getElementById("bbb");
			bbb.style.display="inline";
			hh.className="ok";
			h.style.display="block";	
		}
		//节目
		var One=document.getElementById("One");
		var one=document.getElementById("one");
		var movie=document.getElementById("movie");
		var zero=document.getElementById("zero");
		One.onclic=function(){
			 zero.className="Zero";	
		}
		//导航
//		var onav=document.getElementById("onav");
//		var leftBtn=document.getElementById("leftBtn");
//		var rightBtn=document.getElementById("rightBtn");
////		var i=0;
//		var j=0;
//		var i=onav.style.marginLeft;
//		rightBtn.onclick=function (){
//			if (i==-37) {
//				i=i-475;
//				onav.style="transform:translateX("+i+"px)";
//				
//			}
//		}
//		
}

