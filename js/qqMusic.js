window.onload = function(){
	
	//把隐藏的历史记录显示
	var searchbox = document.getElementById("searchbox");
	var searchhistory = document.getElementById("searchhistory");
	searchbox.onfocus = function(){
		searchhistory.style.display = "block";
	}
	searchbox.onblur = function(){
		searchhistory.style.display = "none";
	}
	
	
	//按右边的按钮显示下一组图片
	var next_bnt = document.getElementById("next_bnt");
	var line1 = document.getElementById("js_line1");
	var line2 = document.getElementById("js_line2");
	var line3 = document.getElementById("js_line3");
	var line4= document.getElementById("js_line4");
	
	var i = 1;
	var musiclist = document.getElementById("musiclist");
	
	//新歌首发
	next_bnt.onclick = function(){		

		if(i==1){
			musiclist.style = "-webkit-transform:translateX(-1200px);transition:0.5s;";
			line2.className="active3";
			line1.className="slide_switch_bg";
			line3.className="slide_switch_bg";
			line4.className="slide_switch_bg";
			i=i+1;
		}else if(i==2){
			musiclist.style = "-webkit-transform:translateX(-2400px);transition:0.5s;";
			line3.className="active3";
			line1.className="slide_switch_bg";
			line2.className="slide_switch_bg";
			line4.className="slide_switch_bg";
			i=i+1;
		}else if(i==3){
			musiclist.style = "-webkit-transform:translateX(-3600px);transition:0.5s;";
			line4.className="active3";
			line1.className="slide_switch_bg";
			line2.className="slide_switch_bg";
			line3.className="slide_switch_bg";
			i=i+1;
		}else if(i==4){
			setTimeout(function(){
				
				musiclist.style = "-webkit-transform:translateX(0px);";
				line1.className="active3";
				line4.className="slide_switch_bg";
				line2.className="slide_switch_bg";
				line3.className="slide_switch_bg";
				i = 1;
			},500);
		}
	}
	
	//按左边的图片显示上一组图片
	var before_bnt = document.getElementById("before_bnt");
	before_bnt.onclick = function(){
		
		if(i==1){
			setTimeout(function(){
				
				musiclist.style = "-webkit-transform:translateX(-3600px);";
				line4.className="active3";
				line1.className="slide_switch_bg";
				line2.className="slide_switch_bg";
				line3.className="slide_switch_bg";
				i = 4;
			},500);
		}else if(i==2){
			
			musiclist.style = "-webkit-transform:translateX(0px);transition:0.5s;";
			line1.className="active3";
			line2.className="slide_switch_bg";
			line3.className="slide_switch_bg";
			line4.className="slide_switch_bg";
			i=i-1;
			
		}else if(i==3){
			musiclist.style = "-webkit-transform:translateX(-1200px);transition:0.5s;";
			line2.className="active3";
			line1.className="slide_switch_bg";
			line3.className="slide_switch_bg";
			line4.className="slide_switch_bg";
			i=i-1;	
		}else if(i==4){
			musiclist.style = "-webkit-transform:translateX(-2400px);transition:0.5s;";
			line3.className="active3";
			line1.className="slide_switch_bg";
			line2.className="slide_switch_bg";
			line4.className="slide_switch_bg";
			i=i-1;
		}
	
	}
	
	//tab页
	var li1 = document.getElementById("li1");
	var li2 = document.getElementById("li2");
	var li3 = document.getElementById("li3");
	var li4 = document.getElementById("li4");
	var new_pic1 = document.getElementById("new_music_pic1");
	var new_pic2 = document.getElementById("new_music_pic2");
	li2.onclick = li4.onclick = function(){
		new_pic1.style.display = "none";
		new_pic2.style.display = "block";
		this.style.color="white";
		li1.style.color =  "#7D7D7D";
//		li4.style.color =  "#7D7D7D";
	}
	li1.onclick = li3.onclick = function(){
		new_pic2.style.display = "none";
		new_pic1.style.display = "block";
		this.style.color="white";
		li2.style.color =  "#7D7D7D";
//		li3.style.color =  "#7D7D7D";
	}
//	var container = document.getElementById("container");
//	var divs = container.getElementsByTagName("div");
//	var music_type = document.getElementById("music_type");
//	var lis = music_type.getElementsByTagName("li");
//	for(var i=0;i<lis.length;i++){
//		lis[i].onclick = function(){
//			divs[i+4].style.display = "none"
//			divs[i+5].style.display = "block";
//			lis[i].style.color = "white";
//			
//		}
//	}
	
	
	//精彩推荐
	var event_list = document.getElementById("event_list");
	var lis = event_list.getElementsByTagName("li");
	var speed = 3000;
	setInterval(move,speed);
	var index = 2;
	function move(){
		if(index<lis.length-4){
			for(var i=0;i<lis.length;i++){
			lis[i].style = "-webkit-transform:translateX("+ (index-1)*-400 +"px) scale(1,1);transition:0.5s";
			}
		
			lis[index].style = "position:relative;top:-20px;z-index:1000;-webkit-transform:translateX("+ (index-1)*-400 +"px) scale(1.51,1.51);transition:0.5s";
			index = index + 1;
		}else{
			
			setTimeout(function(){
				index = 2;
				for(var i=0;i<lis.length;i++){
					lis[i].style = "-webkit-transform:translateX("+ (index-1)*-400 +"px) scale(1,1);transition:0.5s";
				}
			
				lis[index].style = "position:relative;top:-20px;z-index:1000;-webkit-transform:translateX("+ (index-1)*-400 +"px) scale(1.51,1.51);transition:0.5s";
					
			},3000);
		}
		
		
	}
	
	
	//热门歌单
	var next_bnt2 = document.getElementById("next_bnt2");
	var line5 = document.getElementById("js_line5");
	var line6 = document.getElementById("js_line6");
	var line7 = document.getElementById("js_line7");
//	var line4= document.getElementById("js_line4");
	var j = 1;
	var new_mclist = document.getElementById("new_mclist");
	
	next_bnt2.onclick = function(){		

		if(j==1){
			new_mclist.style = "-webkit-transform:translateX(-1200px);transition:0.5s;";
			line6.className="active3";
			line5.className="slide_switch_bg";
			line7.className="slide_switch_bg";
//			line4.className="slide_switch_bg";
			j=j+1;
		}else if(j==2){
			new_mclist.style = "-webkit-transform:translateX(-2400px);transition:0.5s;";
			line7.className="active3";
			line5.className="slide_switch_bg";
			line6.className="slide_switch_bg";
//			line4.className="slide_switch_bg";
			j=j+1;
		}else if(j==3){
			setTimeout(function(){
				
				new_mclist.style = "-webkit-transform:translateX(0px);";
				line5.className="active3";
//				line4.className="slide_switch_bg";
				line6.className="slide_switch_bg";
				line7.className="slide_switch_bg";
				j = 1;
			},500);
		}
		
	}
	
	//按左边的图片显示上一组图片
	var before_bnt2 = document.getElementById("before_bnt2");
	before_bnt2.onclick = function(){
		
		if(j==1){
			setTimeout(function(){
				
				new_mclist.style = "-webkit-transform:translateX(-2400px);";
				line7.className="active3";
				line5.className="slide_switch_bg";
				line6.className="slide_switch_bg";
//				line3.className="slide_switch_bg";
				j = 3;
			},500);
		}else if(j==2){
			
			new_mclist.style = "-webkit-transform:translateX(0px);transition:0.5s;";
			line5.className="active3";
			line6.className="slide_switch_bg";
			line7.className="slide_switch_bg";
//			line4.className="slide_switch_bg";
			j=j-1;
			
		}else if(j==3){
			new_mclist.style = "-webkit-transform:translateX(-1200px);transition:0.5s;";
			line6.className="active3";
			line5.className="slide_switch_bg";
			line7.className="slide_switch_bg";
//			line4.className="slide_switch_bg";
			j=j-1;	
		}
	
	}
	
}
