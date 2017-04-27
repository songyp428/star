window.onload = function(){
	
	var box = document.getElementById("content"),
	    imgbox = document.getElementById("imgbox"),
		next=document.getElementById("next"),
		prev = document.getElementById("prev"),
		dot = document.getElementById("dot"),
		list = dot.children,
		index = 1 ,
		animated = false,
		timer;
		
	function animate(offset){
		var newoffset = parseInt(imgbox.style.left)+ offset;//移动offset值
		var time = 400;//位移总时间
		var interval = 10;//唯一间隔时间
		var speed = offset/(time/interval);
		animated = true;
		function go(){
			if((speed <0 && parseInt(imgbox.style.left)>newoffset) ||(speed >0 && parseInt(imgbox.style.left)<newoffset)){
				imgbox.style.left = parseInt(imgbox.style.left) +speed +"px";
				setTimeout(go,interval);
			}else{
				animated = false;
				imgbox.style.left = newoffset +"px";
				if(newoffset <-3300){//如果是最后一张图片
					imgbox.style.left = -660 + "px";
				}
				if(newoffset >-660){//如果是第一张图片
				imgbox.style.left = -3300 + "px";
				}
			}
		}
		go();
		//debugger;
	}
	
	//点击右箭头触发事件
	next.onclick = function(){
		if(!animated){
			if(index ==  5){//如果是最后一个圆点
				index = 1;
			}else{
				index+=1;
			}
			showDot();
			animate(-660);
		}
				
	}
	//点击左箭头触发事件
	prev.onclick = function(){
		if(!animated){
			if(index == 1){//如果是第一个圆点
				index = 5;
			}else{
				index-=1;
			}
			showDot();
			animate(660);
		}
	}
	//显示圆点的样式
	function showDot(){
		for(var i=0;i<list.length;i++){
			if(list[i].className =="on"){
				list[i].className = "";
				break;
			}			
		}
		list[index-1].className = "on";
	}
	//点击圆点触发事件
	for(var k=0;k<list.length;k++){
		list[k].onclick = function(){
			if(!animated){
				if(this.className =="on"){
					return ;
				}
			
				var myIndex = parseInt(this.getAttribute('index'));//
				var offset = -660*(myIndex-index);
				index = myIndex;
				showDot();
				animate(offset);
			}
			
		};
	}
	//自动播放
	function play(){
		timer = setInterval(function(){
			next.onclick();
		},2000)
	}
	function stop(){
		clearInterval(timer);
	}
	box.onmouseover = function(){
		stop();//鼠标放置图片上停止播放
	}
	box.onmouseout = function(){
		play();//鼠标移开图片上开始播放
	}
	play();
	
}
